import { Injectable } from '@angular/core';
import { TreeModel } from 'ng2-tree/src/tree.types';
import { Http,RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TreeList2Service {
  //
  private treeListUrl =  window.location.href;
  private headers = new Headers({ 'Content-Type': 'application/json'});
  public options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http,
  ) { }

 /**
  *最新tree情報を取得する 
 */
  getTreeInfo(url: string): Promise<any> {
    //APIからtree情報を取得する
    var urlArr = window.location.href.split('/');
    let hrl = urlArr[0]+"//"+urlArr[2]+"/indextree/jsonmapping";
    return this.http.get(hrl)
      .toPromise()
      .then(response => response.json() as any)
      .catch(this.handleError);
    };
  /**
   * nodeを選択した
   */
  setSearchNodeId(url:any,nodeId:any){
    // let postUrl = url + nodeId;
    var urlArr = window.location.href.split('/');
    let geturl = urlArr[0]+"//"+urlArr[2] + "/search?search_type=2&q="+ nodeId;
    window.location.assign(geturl);
  }
  /**
   * エラー処理
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // 
    return Promise.reject(error.message || error);
  }

}
