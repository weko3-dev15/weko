import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cofirm-modal',
  templateUrl: './cofirm-modal.component.html',
  styleUrls: ['./cofirm-modal.component.css']
})
export class CofirmModalComponent implements OnInit {
  //
  @Output() buttonClickEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  @Input() modalAberto: any;
  @Input() parentIsRoot: boolean = false;;

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.modalAberto.status = "none";
  }

  closeModal() {
    this.modalAberto.status = "none";
  }
  /**
   * キャンセルボタン
   */
  delCancle(){
    this.buttonClickEvent.emit("delCancle");
    //modal close
    this.closeModal();
  }
  /**
   * すべて削除
   */
  delAll(){
    this.buttonClickEvent.emit("delAll");
    this.closeModal();
  }
  /**
   * 
   */
  delAndMove(){
    this.buttonClickEvent.emit("delAndMove");
    this.closeModal();
  }

}
