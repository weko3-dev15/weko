import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { TreeModel, NodeEvent, NodeMenuItemAction, TreeModelSettings, Ng2TreeSettings } from 'ng2-tree';
import { TreeList2Service } from '../tree-list2.service';
import { isJsObject } from '@angular/core/src/change_detection/change_detection_util';
import { Response } from '@angular/http/src/static_response';
import { Tree } from 'ng2-tree/src/tree';

@Component({
  selector: 'app-tree-list2',
  templateUrl: './tree-list2.component.html',
  styleUrls: ['./tree-list2.component.css'],
  providers: [TreeList2Service]
})

export class TreeList2Component implements OnInit {
  //
  @ViewChild('treeList') treeList;

  //表示様式フラグ　0:チェックボークスなし　1:チェックボークスあり
  @Input()
  public templflg: string = "0";

  //選択したnodeIｄ
  public selNodeId: any = "";
  //settings templite
  private setting: TreeModelSettings = {};
  //treeの設定
  public checkboxSettings: Ng2TreeSettings = {};
  //Tree　json
  public treeH: TreeModel = {
    value: "",
    id: 1,
    children: []
  };

  public testtree: Tree;
  //nodeの名 日本語
  public nodeValueJa: string = "";
  //nodeの名 英語
  public nodeValueEn: string = "";
  //コメント
  public inputCommentVal: string = "";
  //表示範囲
  private rssDisplayVal: boolean = true;
  //s選択したnodeの情報（サービス用）
  private checkedList: any[] = [];
  private nodeIdList: any[] = [];
  //選択したNode情報（表示用）
  private nodeURL: string = "";
  public serviceReturnData: any = {
    "metadata":{
      "path":[]
    },
    "status":0
  };
  //インデックスを格納
  public treeChildren:any = [];


  constructor(private treeList2Service: TreeList2Service) {
  }

  ngOnInit() {
    //チェックボックスあるかを設定する
    if (this.templflg == '0') {
      this.checkboxSettings = {
        rootIsVisible: true,
        showCheckboxes: false
      };
    } else {
      this.checkboxSettings = {
        rootIsVisible: false,
        showCheckboxes: true
      };
    }
    //サービスを呼び出す
    this.treeList2Service.getTreeInfo().then(arr => {
      this.treeH = {
        value: "RootNode",
        id: 1,
        children: arr
      }
      //編集する場合
      this.getCkedNodeListInit();
    });
  }

  ngAfterViewInit(): void {
    this.setCheckList();
  }
  /**
 * Nodeを選択する
 */
  seleNode(e: NodeEvent) {
    //選択したNodeIdを格納する
    this.selNodeId = e.node.id;
    let url = this.getNodeurl();
    this.nodeValueJa = e.node.value;
  }
  /**
   * 日付でNodeIDを設定する
   */
  setNodeID(): string {
    let timestamp = new Date().getTime().toString();
    return timestamp;
  }
  /**
   * string
   */
  treeToJsonStr() {
    //treeModel
    let treeMdl = this.treeList.tree.toTreeModel();
  }
  /**
   * Nodeを選択したするとき、NodeUrlを取得する
   */
  getNodeurl() {
    //選択したNode
    let oopNodeController = this.treeList.getControllerByNodeId(this.selNodeId);
    //親Nodeidを取得する
    let parentNodeID = oopNodeController.tree.parent;
  }
  /**
   * 選択した
   */
  getParent(val: any) {

    if (val.parent != null) {
      this.nodeURL = this.nodeURL + val.parent.value + "/";
      this.getParent(val.parent)
    } else {
      let strs: string[] = this.nodeURL.split("/")
      this.nodeURL = "";
      for (let i = 1; i <= strs.length; i++) {
        this.nodeURL = this.nodeURL + strs[strs.length - i] + "/";
      }
      this.nodeURL = this.nodeURL + this.treeList.getControllerByNodeId(this.selNodeId).tree.value;
    }
  }
  /**
   * NOdeの名を変更する
   * @param val  新し名
   */
  setNodeVal(val: string) {
    let oopNodeController = this.treeList.getControllerByNodeId(this.selNodeId);
    oopNodeController.rename(val);
  }
  /**
   * チェックしたNodeを取得する
   */
  getCheckedNode(val: TreeModel) {
    for (let d of val.checkedChildren) {
      this.setNodeList(d);
    }
    if (val.children.length != 0) {
      for (let d of val.children) {
        this.getCheckedNode(d);
      }
    }

  }
  /**
   * チェックしたnode
   */
  setCheckList() {
    //Node情報を再設定
    this.checkedList = [];
    this.nodeIdList = [];
    if (this.treeList.tree.checked) {
      this.setNodeList(this.treeList.tree)
    }
    this.getCheckedNode(this.treeList.tree);
  }
  /**
   * サービスitems詳細画面の送信ボタン
   */
  sending() {
    let post_url = document.getElementById('post_url').innerText;
    this.treeList2Service.setCheckedNode(post_url, this.nodeIdList).then(res =>{
                                          //一旦設定
                                           let urlArr = window.location.href.split('/');
                                           let url = urlArr[0]+"//"+urlArr[2]+"/items";
                                           window.location.href = url;
                                         });
  }
  /**
   * サービスインデックス編集画面の送信ボタン
   */
  sendingIndex() {
    this.treeList2Service.setTreeInfo(this.treeList.tree)
  }
  /**
   * チェックボックスを選択したNode情報を設定する
   */
  setNodeList(val: any) {
    let subList = { id: "", value: "" };
    subList.id = val.id;
    subList.value = val.value;
    this.checkedList.push(subList);
    this.nodeIdList.push(val.id);
  }
  /**
   * 画面初期に選択したNodeの項目名をリストに設定する
   */
  getCkedNodeListInit(){
    this.checkedList = [];
    this.nodeIdList = [];
    this.getCheckedNodeInit(this.treeH);
  }
  /**
   * チェックしたNodeを取得する
   */
  getCheckedNodeInit(val: TreeModel) {
    for (let d of val.children) {
      if(d.settings.checked){
        this.setNodeList(d);
      }
      if(d.children.length !=0 ){
        this.getCheckedNodeInit(d);
      }
    }
  }
}
