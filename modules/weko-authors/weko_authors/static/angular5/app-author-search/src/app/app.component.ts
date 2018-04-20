import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
declare var $: any;

@Component({
  selector: 'app-author-search',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //画面データを設定
  // JPCORE 対応start 20180402 
  public authorJsonObj:any={
    creator:{
      nameIdentifier:[
        {
          "jpCoar_attributes":{
            nameIdentifierScheme:"",
            nameIdentifierURI:"",
          },
          "jpCoar_value":"",
          authorIdShowFlg:""
        }
      ],
      creatorName:[
        {
          "jpCoar_attributes":{
            lang:"",
          },
          "jpCoar_value":"",
          nameFormat: "",
          nameShowFlg: ""
        }
      ],
      familyName:[
        {
          "jpCoar_attributes":{
            lang:"", 
          },
          "jpCoar_value":"",
          nameFormat: "",
          nameShowFlg: ""
        }
      ],
      givenName:[
        {
          "jpCoar_attributes":{
            lang:"", 
          },
          "jpCoar_value":"",
          nameFormat: "",
          nameShowFlg: ""
        }
      ],
      emailInfo: [
        { email: "" }
      ]
    }
  }

  // JPCORE 対応start 20180402 
  //検索すると、サービスから戻ったデータ
  public searchJson: any = {
    hits: {
      total: 53,
      hits: [
        { _source: this.authorJsonObj }
      ]
    }
  };
  //検索条件
  public searchKey: string = "";
  //画面表示データを設定する
  public subDisplayData: any = {
  };
  //画面表示用
  public displayData: any = [];
  //1ヘージに表示数
  public numberOfpage: number = 25;
  //検索データ総数
  public total: number = 0;
  //ページに表示する件数from
  public numberFrom: number = 0;
  //ページに表示する件数To
  public numberTo: number = 0;
  //選択したヘージ数
  public pageNumber: number = 1;
  //page用リスト
  public pageList: number[] = [];
  //検索結果0件
  public searchZero:boolean=false;
  //ソート氏名フラグ　asc→desc
  public sortNameFlg:string="noSort"
  //ソートメールフラグ　asc→desc
  public sortEmailFlg:string="noSort"
  //ソートキー
  public sortKey:string="";
  //ソート順
  public sortOrder:string="";


  constructor(private http: Http,
  ) { }

  ngOnInit() {
  }
  /**
   *組織追加処理 
   */
  groupAdd() {
    //todo
    // alert("すみません、今、この処理は実装されないです。")
    alert("Sorry, this process is not implemented now.");
  }
  /**
   *著者追加 
   */
  authorAdd() {
    var urlArr = window.location.href.split('/');
    const url = urlArr[0] + "//" + urlArr[2] + "/authors/add"
    window.location.href = url;
  }
  /**
   * 検索処理
   */
  searchButton() {
    this.search(1);
    $("li").removeClass("active");
    $('#pageLink_1').addClass("active");
  }
  /**
   * ソート処理
   */
  clickSort(val1:string,val2:string){
    //
    if(val2=="name"){
      this.sortNameFlg = val1;
      this.sortEmailFlg ="noSort";
      this.sortKey="authorNameInfo.fullName";
      this.sortOrder=val1;
    }else if(val2=="email"){
      this.sortNameFlg ="noSort";
      this.sortEmailFlg = val1;
      this.sortKey="emailInfo.email";
      this.sortOrder=val1;
    }
    //1page
    this.pageNumber = 1;
    $("li").removeClass("active");
    $('#pageLink_1').addClass("active");
    this.search(1);
  }
  /**
   * 検索処理
   */
  search(pageNo:number) {
    //検索条件を設定する
    let jsonObj = { searchKey: "", pageNumber: 1, numOfPage: 25 ,sortKey:"",sortOrder:""};
    this.searchKey = this.searchKey.replace("　", " ");
    jsonObj.searchKey = this.searchKey;
    jsonObj.pageNumber = this.pageNumber;
    jsonObj.numOfPage = this.numberOfpage;
    jsonObj.sortKey = this.sortKey;
    jsonObj.sortOrder = this.sortOrder;
    //サービスを呼び出す
    this.getPageDataJson(jsonObj).then(res => {
      this.searchJson = res;
      this.setDisplayData();
      //総数を設定する
      this.total = this.searchJson.hits.total;
      if(this.total == 0){
        this.searchZero = true;
        this.numberFrom = 0;
        this.numberTo = 0;
      }else{
        this.searchZero = false;
      }
      this.setPageInfo();
      //検索ボタンをクリックすると1ページを表示する
      this.setNumberOfPageInfo(pageNo);
    }).catch(res => {
      // alert("サービスにエラー発生しました");
      alert("Sorry, an unknown error has occurred!");
    }
      );
    //表示データを設定す
  }
  /**
   * 編集処理
   */
  update(index: any) {
    //todo
    // alert("すみません、今、この処理は実装されないです。")
    alert("Sorry, this process is not implemented now.");
  }
  /**
   * ページ数設定
   */
  setPageInfo() {
    this.pageList = [];
    let pageNo = Math.floor(this.total / this.numberOfpage);
    for (let i = 0; i < pageNo; i++) {
      this.pageList.push(i + 2);
    }
  }
  /**
   * 表示件数情報を設定
   * @param val 選択したページ情報
   */
  setNumberOfPageInfo(val: number) {
    //初期化
    this.numberFrom = 0;
    this.numberTo = 0;
    //件数情報を設定
    this.numberFrom = (val - 1) * this.numberOfpage + 1;
    this.numberTo = val * this.numberOfpage;
    if (this.numberTo > this.total) {
      this.numberTo = this.total;
    }
  }
  /**
   * 1ページに表示件数を設定する
   */
  setNumber(val: number) {
    //1ページに表示件数を設定する
    this.numberOfpage = val;
    //1
    this.pageNumber = 1;
    //検索する
    this.search(1);
    $("li").removeClass("active");
    $('#pageLink_1').addClass("active");
  }
  /**
   *ページをクリック 
   */
  clickPage(index: number) {
    //ページリンクの選択状態を設定する
    this.pageNumber = index;
    let a = "#pageLink_" + index;
    $("li").removeClass("active");
    $(a).addClass("active");
    //検索する
    this.search(index);

  }
  /**
   * 画面で表示するデータを設定する
   */
  setDisplayData() {
    this.subDisplayData = {};
    this.displayData = [];
    if (this.searchJson.hits.hits.length != 0) {
      for (let data of this.searchJson.hits.hits) {
        let subData = {
          authorNameInfo: { authorName: "" },
          anthorIdInfo: { authorId: "" },
          emailInfo: { email: "" },
        };
        if (data._source.hasOwnProperty("authorNameInfo")) {
          let nameInfo = "";
          for (let d of data._source.authorNameInfo) {
            if (d.nameFormat == "familyNmAndNm") {
              nameInfo = nameInfo + d.familyName + "　" + d.firstName + "<br>";
            } else {
              nameInfo = nameInfo + d.fullName + "<br>";
            }
          }
          subData.authorNameInfo.authorName = nameInfo;
        }
        if (data._source.hasOwnProperty("anthorIdInfo")) {
          let idInfo = "";
          for (let d of data._source.anthorIdInfo) {
            idInfo = idInfo + d.authorId + "<br>";
          }
          subData.anthorIdInfo.authorId = idInfo;
        }
        if (data._source.hasOwnProperty("emailInfo")) {
          let emailInfo = "";
          for (let d of data._source.emailInfo) {
            emailInfo = emailInfo + d.email + "<br>";
          }
          subData.emailInfo.email = emailInfo;
        }
        this.displayData.push(subData);
      }
    }
  }

  /**
   * 保存
   */
  getPageDataJson(searchJsonObj: any): Promise<void> {
    var urlArr = window.location.href.split('/');
    const url = urlArr[0] + "//" + urlArr[2] + "/api/authors/search"
    return this.http
      .post(url, searchJsonObj)
      .toPromise()
      .then(response => response.json() as any)
      .catch(this.handleError);
  }
  /**
   * エラー処理
   */
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
