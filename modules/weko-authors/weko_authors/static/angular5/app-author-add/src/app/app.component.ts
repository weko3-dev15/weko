import { Component, OnInit } from '@angular/core';
import { Http,RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-tyosya',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //画面データを設定
  //set data of page by json
  public authorJsonObj: any = {
    authorNameInfo: [
      {
        familyName: "",
        firstName: "",
        fullName: "",
        language: "ja-Kana",
        nameFormat: "familyNmAndNm",
        nameShowFlg: "true"
      }
    ],
    authorIdInfo: [
      {
        idType: "cinii",
        authorId: "",
        authorIdShowFlg: "true"
      }
    ],
    emailInfo: [
      { email: "" }
    ]
  }
  //氏名の入力方
  // set data of name List
  public langOptions: any[] = [
    { id: "ja-Kana", value: "ja-kana" },
    { id: "ja", value: "ja" },
    { id: "en", value: "en" }
  ];
  //氏名の形式
  // set data of name List
  public nameOptions: any[] = [
    // { id: "familyNmAndNm", value: "姓・名" },
    // { id: "fullNm", value: "姓名" }
    { id: "familyNmAndNm", value: "First and Last Name" },
    { id: "fullNm", value: "Full Name" }
  ];
  // set data of group list
  public authorIdOptions: any[] = [
    { id: "cinii", value: "CiNii" },
    { id: "kaken", value: "KAKEN" },
    { id: "orcid", value: "ORCID" },
    { id: "weko3", value: "WEKO3" }
  ]
  //氏名が姓・名で入力する場合
  // set input guide
  public placeholderArry:any=[
    {familyName:"セイ",
     name:"メイ",
     fullName:"セイ,メイ"
    }
  ];

  constructor(private http: Http,
  ) { }

  ngOnInit() {

  }

  /**
   * 氏名情報を削除する
   * delete name info
   * ＠@param index 削除する位置情報(position) 
   */
  delAuthorNameData(index: any) {
    //全部削除する場合
    if (this.authorJsonObj.authorNameInfo.length == 1) {
      let authorNameInfoObj = this.returnAuthorNameInfoObj();
      this.authorJsonObj.authorNameInfo.splice(index, 1, authorNameInfoObj);
      //案内内容を取得する
    　let b = this.returnPlaceholderInfo();
      //案内内容を変更
    　this.placeholderArry.splice(index, 1, b);
    } else {
      this.authorJsonObj.authorNameInfo.splice(index, 1);
      //案内内容を変更
    　this.placeholderArry.splice(index, 1);
    }
  }
  /**
   * 著者Id情報を削除する
   * delete author id info
   * ＠@param 削除する位置情報(position)
   */
  delAuthorIdData(index: any) {
    //全部削除する場合
    // all authorId info  
    if (this.authorJsonObj.authorIdInfo.length == 1) {
      let authorIdInfoObj = this.returnAuthorIdInfoObj();
      this.authorJsonObj.authorIdInfo.splice(index, 1, authorIdInfoObj);
    } else {
      this.authorJsonObj.authorIdInfo.splice(index, 1);
    }
  }
  /**
   * emailを削除する
   * ＠@param 削除する位置情報
   */
  delEmailData(index: any) {
    //全部削除する場合
    if (this.authorJsonObj.emailInfo.length == 1) {
      let subEmailInfo = this.returnSubEmailInfo();
      this.authorJsonObj.emailInfo.splice(index, 1, subEmailInfo);
    } else {
      this.authorJsonObj.emailInfo.splice(index, 1)
    }
  }
  /**
   * 氏名情報を追加する
   */
  addAuthorNameData() {
    //子対象を取得する
    let authorNameInfoObj = this.returnAuthorNameInfoObj();
    //行目を追加
    this.authorJsonObj.authorNameInfo.push(authorNameInfoObj);
    //案内内容を取得する
    let b = this.returnPlaceholderInfo();
    //案内内容を追加する
    this.placeholderArry.push(b);
  }
  /**
   * 著者情報を追加する
   */
  addAuthorIdInfo() {
    //子対象を取得す
    let authorIdInfoObj = this.returnAuthorIdInfoObj();
    //行目を追加
    this.authorJsonObj.authorIdInfo.push(authorIdInfoObj);
  }
  /**
   * メール情報を削除する
   */
  addEmailInfo() {
    //子対象を取得する
    let subEmailInfo = this.returnSubEmailInfo();
    //行目を追加
    this.authorJsonObj.emailInfo.push(subEmailInfo);
  }
  /**
   *画面情報をクリアする
   */
  clearInputInfo() {
    //情報行目数を格納
    let authorNameInfoLength = this.authorJsonObj.authorNameInfo.length;
    let authorIdInfoLength = this.authorJsonObj.authorIdInfo.length;
    let emailInfoLength = this.authorJsonObj.emailInfo.length;
    //画面情報を初期化
    this.authorJsonObj.authorNameInfo = [];
    this.authorJsonObj.authorIdInfo = [];
    this.authorJsonObj.emailInfo = [];
    //予定行を追加
    for (let i = 0; i < authorNameInfoLength; i++) {
      let authorNameInfoObj = this.returnAuthorNameInfoObj();
      this.authorJsonObj.authorNameInfo.push(authorNameInfoObj);
      this.placeholderArry[i].familyName="セイ";
      this.placeholderArry[i].name="メイ";
      this.placeholderArry[i].fullName="セイ,メイ";
    }
    for (let i = 0; i < authorIdInfoLength; i++) {
      let authorIdInfoObj = this.returnAuthorIdInfoObj();
      this.authorJsonObj.authorIdInfo.push(authorIdInfoObj);
    }
    for (let i = 0; i < emailInfoLength; i++) {
      let subEmailInfo = this.returnSubEmailInfo();
      this.authorJsonObj.emailInfo.push(subEmailInfo);
    }
    //入力案内内容を初期化に変更する

  }
  /**
   * 氏名情報を返す
   */
  returnAuthorNameInfoObj(): any {
    //氏名情報
    let authorNameInfoObj = {
      familyName: "",
      firstName: "",
      fullName: "",
      language: "ja-Kana",
      nameFormat: "familyNmAndNm",
      nameShowFlg: "true"
    }
    return authorNameInfoObj;
  }
  /**
   * 著者ID情報を返す
   */
  returnAuthorIdInfoObj(): any {
    //著者ID情報
    let authorIdInfoObj = {
      idType: "cinii",
      authorId: "",
      authorIdShowFlg: "true"
    }
    return authorIdInfoObj;
  }
  /**
   * email情報を返す
   */
  returnSubEmailInfo(): any {
    //メール情報
    let subEmailInfo = {
      email: ""
    }
    return subEmailInfo;
  }
  /**
   *placeholder案内内容を返す 
   */
  returnPlaceholderInfo():any{
    let placeholderInfo ={familyName:"セイ",
            name:"メイ",
            fullName:"セイ,メイ"
    };
    return placeholderInfo;
  }

  /**
   * 保存処理
   */
  save(){
    let a = JSON.stringify(this.authorJsonObj);
    let dbJson = this.changeJson();
    this.postPageDataJson(dbJson).then(res=>{
      // alert("保存成功！");
      alert("Saved successfully！");
    }).catch(res =>{
      if(res.status == "404"){
        // alert("システムエラーは発生しました。管理者に連絡ください。")
        alert("Sorry, an unknown error has occurred!");
      }else{
        // alert("保存失敗！")
        alert("Sorry, an unknown error has occurred!");
      }
    })
  }
  /**
   * 入力案内内容を変更する
   */
  inputChange(index:any,id:any){
    if(id=="ja-Kana"){
      this.placeholderArry[index].familyName ="セイ";
      this.placeholderArry[index].name ="メイ";
      this.placeholderArry[index].fullName ="セイ,メイ";
    }else if(id=="ja"){
      this.placeholderArry[index].familyName ="姓";
      this.placeholderArry[index].name ="名";
      this.placeholderArry[index].fullName ="姓名";
    }else{
      this.placeholderArry[index].familyName ="family";
      this.placeholderArry[index].name ="first";
      this.placeholderArry[index].fullName ="family,first";
    }
  }
  /**
   *名前入力形式を変更する場合 
   */
  nameFormatChange(index:any){
    //名前入力形式を変更する場合、入力した情報を再設定する
    this.authorJsonObj.authorNameInfo[index].familyName="";
    this.authorJsonObj.authorNameInfo[index].firstName="";
    this.authorJsonObj.authorNameInfo[index].fullName="";
  }
  /**
   * Jsonに保存した情報を整理
   */
  changeJson():any{

    let a = JSON.stringify(this.authorJsonObj);
    let b = a;
    let jsonStrCopy = JSON.parse(b);

    for(let i=0; i< jsonStrCopy.authorNameInfo.length;i++){

      if(  jsonStrCopy.authorNameInfo[i].familyName==""
        &&  jsonStrCopy.authorNameInfo[i].firstName==""
        &&  jsonStrCopy.authorNameInfo[i].fullName==""
      ){
         jsonStrCopy.authorNameInfo.splice(i,1);
      }else{
        if(jsonStrCopy.authorNameInfo[i].familyName!=""
        &&  jsonStrCopy.authorNameInfo[i].firstName!=""
        &&  jsonStrCopy.authorNameInfo[i].fullName==""
        ){
          jsonStrCopy.authorNameInfo[i].fullName =  jsonStrCopy.authorNameInfo[i].familyName + " "+jsonStrCopy.authorNameInfo[i].firstName;
        }
      }
    }
    for(let i=0; i< jsonStrCopy.authorIdInfo.length;i++){
      if(  jsonStrCopy.authorIdInfo[i].authorId==""){
         jsonStrCopy.authorIdInfo.splice(i,1);
      }
    }
    for(let i=0; i< jsonStrCopy.emailInfo.length;i++){
      if(  jsonStrCopy.emailInfo[i].email==""){
         jsonStrCopy.emailInfo.splice(i,1);
      }
    }
    return jsonStrCopy;
  }
/**
 * 保存
 */
  postPageDataJson(authorJsonObj:any):Promise<void>{
    var urlArr = window.location.href.split('/');
    const url = urlArr[0]+"//"+urlArr[2]+"/api/authors/add"
    return this.http
    .post(url,authorJsonObj)
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
