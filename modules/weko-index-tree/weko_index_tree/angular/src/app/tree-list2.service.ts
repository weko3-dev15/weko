import { Injectable } from '@angular/core';
import { TreeModel } from 'ng2-tree/src/tree.types';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TreeList2Service {
  //サービスの設定
  private headers = new Headers({ 'Content-Type': 'application/json' });
  public options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  /**
   * 選択したNODEの情報を取得する
   * @param nodeId: 選択したNodeId
   */
  getNodeInfo(url: string): Promise<any> {
    //APIからtree情報を取得する
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as any)
      .catch(this.handleError);
  };

  /**
   *最新tree情報を取得する 
  */
  getTreeInfo(url: string): Promise<any[]> {
    //APIからtree情報を取得する
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as any[])
      .catch(this.handleError);
  };
  /**
   *最新Tree情報をApiへ設定する
   */
  setTreeInfo(url: string, treeModel: any): Promise<any> {
    return this.http
      .put(url, treeModel, this.options)
      .toPromise()
      .then(response => response.json() as any[])
      .catch(this.handleError);
  }
  /**
   * インデックスに選択したnode情報を送る
   */
  setCheckedNode(val: string, nodeList: any[]): Promise<void> {
    return this.http
      .put(val, nodeList)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  /**
   * nodeの情報を設定する
   */
  setNodeInfo(url: string, nodeId: string, data: {}): Promise<void> {
    let postUrl = url + nodeId;
    return this.http
      .post(postUrl, data)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  /**
   *最新Tree情報をApiへ設定する
   */
  delTreeInfo(url: string): Promise<any> {
    return this.http
      .delete(url)
      .toPromise()
      .then(response => response.json() as any)
      .catch(this.handleError);
  }
  /**
   * 削除して親へ遷移
   *最新Tree情報をApiへ設定する
   */
  delAndMoveTreeInfo(childId:any,parentId:any): Promise<any> {
    var urlArr = window.location.href.split('/');
    const url = urlArr[0]+"//"+urlArr[2]+"/indextree/move/"+ childId+"/"+parentId;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json() as any)
      .catch(this.handleError);
  }



  /**
   *削除するインデックスにアイテム情報を取得する
   */
  getItemsInfo(nodeId:any): Promise<any> {
    var urlArr = window.location.href.split('/');
    const url = urlArr[0]+"//"+urlArr[2]+"/indextree/items/count/"+ nodeId;
    //APIからtree情報を取得する
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as any)
      .catch(this.handleError);
  };
   /**
   * 多言語対応
  */
  getLnagJson(url: any): Promise<any> {
    return this.http
    .get(url)
    .toPromise()
    .then(response => response.json() as any)
    .catch(this.handleError);
   }

  /**
   * エラー処理
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // 
    return Promise.reject(error.message || error);
  }

}
