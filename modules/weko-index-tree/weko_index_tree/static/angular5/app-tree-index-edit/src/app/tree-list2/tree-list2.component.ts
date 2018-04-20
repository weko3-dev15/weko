import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { TreeModel, NodeEvent, NodeMenuItemAction, TreeModelSettings, Ng2TreeSettings } from 'ng2-tree';
import { TreeList2Service } from '../tree-list2.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-tree-list2',
  templateUrl: './tree-list2.component.html',
  styleUrls: ['./tree-list2.component.css'],
  providers: [TreeList2Service]
})

export class TreeList2Component implements OnInit {
  aa: string;
  @ViewChild('treeList') treeList;
  //表示様式フラグ　0:チェックボークスなし　1:チェックボークスあり
  @Input()
  public templflg: string = "0";
  //選択したnodeIｄ
  public selNodeId: any = "";
  //選択したnodeの親Id
  public selNodeParentId: any = "";
  //settings templite
  private setting: TreeModelSettings = {};
  //treeの設定
  public checkboxSettings: Ng2TreeSettings = {};
  //Tree　json
  public treeH: TreeModel = {
    value: "RootNode",
    id: 1,
    children: []
  };
  //nodeの名 日本語
  public nodeValueJa: string = "";
  //nodeの名 コピー
  public nodeValueJaCopy: string = "";
  //nodeの名 英語
  public nodeValueEn: string = "";
  //コメント
  public inputCommentVal: string = "";
  //表示範囲
  private rssDisplayVal: boolean = true;
  //s選択したnodeの情報（サービス用）
  private checkedList: any[] = [];
  //選択したNode情報（表示用）
  private nodeURL: string = "";
  //ツリー詳細
  public detailData = { id: "", index_name: "", index_name_english: "", comment: "" };
  //詳細画面入力フラグ
  private inputFlg: boolean = false;
  //modalの表示用
  public modalStatus: any = { 'status': 'none' };
  //返す結果状態
  private res = { code: 400, msg: "", data: { count: 0 } };
  //parentNode を判断する
  public parentIsRoot:boolean = false;

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
        rootIsVisible: true,
        showCheckboxes: true
      };
    };
    //RootNodeを設定する
    this.treeH = {
      value: "RootNode",
      id: 1,
      children: [],
      settings: {
        'static': true,
        'isCollapsedOnInit': false,
      }
    };
    this.treeList.tree = this.treeH;
    //画面初期treeを取得
    let getTreeJsonUrl = document.getElementById('get_tree_json').innerText;
    this.treeList2Service.getTreeInfo(getTreeJsonUrl).then(arr => {
      const oopNodeController = this.treeList.getControllerByNodeId(1);
      if (Array.isArray(arr) && arr.length > 0) {
        oopNodeController.setChildren(arr);
      }
    });
  }
  /**
   * 画面をロードした後に処理を行う
   */
  ngAfterViewInit(): void {
  }
  /**
   * Nodeを削除する
   */
  deleNode() {
    //nodeは選択されない場合
    if (this.selNodeId == null || this.selNodeId == 1) {
      return;
    }
    //選択したインデックスに子インデックスを判断する
    let oopNodeController = this.treeList.getControllerByNodeId(this.selNodeId);
    let parentNodeID = oopNodeController.tree.parent.id;
    let childLeth = oopNodeController.tree.children.length;
    if (childLeth != 0) {
      //モデル画面を表示する
      if(parentNodeID == 1){
        this.parentIsRoot = true;
      }else{
        this.parentIsRoot = false;
      }
      this.openModule(null);
    } else {
      //アイテム情報を取得する
      this.treeList2Service.getItemsInfo(this.selNodeId).then(res => {
        this.res = res;
        if (this.res.data.count != 0) {
          if(parentNodeID == 1){
            this.parentIsRoot = true;
          }else{
            this.parentIsRoot = false;
          }
          this.openModule(null);
        } else {
          this.deleteNode("delAll");
        }
      }).catch(res => {
        // alert("削除失敗！")
        alert("Delete Error！")
      })
    }
  }
  /**
   * Nodeを削除する
   */
  deleteNode(e: any) {
    //キャンセル
    if (String(e) == "delCancle") {
      return;
      //削除を確定する場合
    } else {
      if (String(e) == "delAndMove") {
        this.treeList2Service.delAndMoveTreeInfo(this.selNodeId, this.selNodeParentId).then(res => {
          if (res.code == 0) {
            //選択したnodeに子Nodeがあるかを判定する
            let oopNodeController = this.treeList.getControllerByNodeId(this.selNodeId);
            let childLeth = oopNodeController.tree.children.length;
            //親Nodeidを取得する
            let parentNodeID = oopNodeController.tree.parent.id;
            //親を設定する
            let parentNodeCtro = this.treeList.getControllerByNodeId(parentNodeID);
            if (childLeth != 0) {
              let children: TreeModel = oopNodeController.tree.children;
              for (let i = 0; i < children.length; i++) {
                let child = children[i].toTreeModel();
                parentNodeCtro.addChild(child);
              }
            }
            //NODEを削除する
            oopNodeController.remove();
            //編集画面を再設定
            let oopNodeControllerRoot = this.treeList.getControllerByNodeId(1);
            oopNodeControllerRoot.select();
            //最新treeをサービスに設定する
            this.updateTreeToApi();
          } else {
            // alert("削除サービスはエラーとなりました。")
            alert("Sorry, an unknown error has occurred in delete processing!")
          }
        });
      } else {
        //削除サービスを呼び出し
        let modTreeDetailUrl = document.getElementById('mod_tree_detail').innerText;
        modTreeDetailUrl = modTreeDetailUrl + this.selNodeId;
        this.treeList2Service.delTreeInfo(modTreeDetailUrl).then(res => {
          if (res.code == 0) {
            let oopNodeController = this.treeList.getControllerByNodeId(this.selNodeId);
            oopNodeController.remove();
            let oopNodeControllerRoot = this.treeList.getControllerByNodeId(1);
            oopNodeControllerRoot.select();
            //最新treeをサービスに設定する
            this.updateTreeToApi();
          } else {
            alert("Sorry, an unknown error has occurred in delete processing!")
          }
        });
      }
    }
  }
  /**
   * nodeを追加する
   */
  addNode() {
    //node 追加
    const oopNodeController = this.treeList.getControllerByNodeId(this.selNodeId);
    let newNodeId = this.setNodeID();
    let newNode: TreeModel = {
      value: 'this a new Node',
      id: newNodeId,
      children: [],
      settings: {
        'static': false,
        'rightMenu': false,
        'leftMenu': false,
        'isCollapsedOnInit': true,
      }
    };
    oopNodeController.addChild(newNode);
    //サービスを呼び出し
    this.updateTreeToApi();
  }
  /**
 * Nodeを選択する
 */
  seleNode(e: NodeEvent) {
    //選択したNodeIdを格納する
    this.selNodeId = e.node.id;
    this.nodeValueJaCopy = e.node.value;
    if (this.selNodeId != 1) {
      this.selNodeParentId = e.node.parent.id;
      this.inputFlg = true;
      let url = this.getNodeurl();
      let modTreeDetailUrl = document.getElementById('mod_tree_detail').innerText + this.selNodeId;
      this.treeList2Service.getNodeInfo(modTreeDetailUrl).then(res => {
        this.detailData = res;
        this.setNodeInfo();
      });
    } else {
      this.inputFlg = false;
      this.nodeValueJa = e.node.value;
      this.nodeValueEn = "";
      this.inputCommentVal = "";
    }
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
  treeToJsonStr(): any {
    //treeModel
    let treeMdlel = this.treeList.tree.toTreeModel().children;
    let tmpTreeStr = JSON.stringify(treeMdlel, ['value', 'id', 'children', 'loadChildren', 'settings', 'emitLoadNextLevel', 'checked', 'isCollapsedOnInit']);
    let serviceTreeStr = JSON.parse(tmpTreeStr);
    return serviceTreeStr;
  }
  /**
   * Nodeを選択したするとき、NodeUrlを取得する
   */
  getNodeurl() {
    //選択したNode
    let oopNodeController = this.treeList.getControllerByNodeId(this.selNodeId);
    //親Nodeidを取得する
    let parentNodeID = oopNodeController.tree.parent;
    this.nodeURL = "";
    this.getParent(oopNodeController.tree)
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
    this.treeList2Service.setCheckedNode(post_url, this.checkedList);
  }
  /**
   * サービスインデックス編集画面の送信ボタン
   */
  sendingdetail() {
    //ツリー詳細を編集＞サービスを呼び出す
    if (this.nodeValueJa != "") {
      this.detailData.index_name = this.nodeValueJa;
    } else {
      this.detailData.index_name = this.nodeValueJaCopy;
    }
    this.detailData.index_name_english = this.nodeValueEn;
    this.detailData.comment = this.inputCommentVal;
    let modTreeDetailUrl = document.getElementById('mod_tree_detail').innerText;
    this.treeList2Service.setNodeInfo(modTreeDetailUrl, this.selNodeId, this.detailData);
    this.setNodeVal(this.detailData.index_name);
    //ツリーは変更された＞サービスを呼び出し
    this.updateTreeToApi();

  }
  /**
   * チェックボックスを選択したNode情報を設定する
   */
  setNodeList(val: any) {
    let subList = { id: "", value: "" };
    subList.id = val.id;
    subList.value = val.value;
    this.checkedList.push(subList);
  }
  /**
   * 画面詳細編集
   */
  setNodeInfo() {
    if (this.detailData != {}) {
      this.nodeValueJa = this.detailData.index_name;
      this.nodeValueEn = this.detailData.index_name_english;
      this.inputCommentVal = this.detailData.comment;
    }
  }
  /**
   *最新なのindexTreeをAPIへ送る
   @param val:更新フラグ　0:追加 1:削除
   */
  updateTreeToApi() {
    //最新Tree
    let treeJsonStr = this.treeToJsonStr();
    let uptTreeJsonUrl = document.getElementById('upt_tree_json').innerText;
    //サービスを呼び出し
    this.treeList2Service.setTreeInfo(uptTreeJsonUrl, treeJsonStr);
  }

  /**
   * modal画面を表示する
   * @param event 
   */
  openModule(event) {
    this.modalStatus.status = 'table-cell';
  }
}
