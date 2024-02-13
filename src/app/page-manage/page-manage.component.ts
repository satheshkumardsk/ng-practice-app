import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-page-manage',
  templateUrl: './page-manage.component.html',
  styleUrl: './page-manage.component.scss'
})
export class PageManageComponent implements OnChanges {

  isActive = false;


  ngOnChanges(changes: SimpleChanges): void {
    this.pageNumber = changes['pageNumber'].currentValue;
    this.pageSize = changes['pageSize'].currentValue;
  }

  @Input() pageNumber: number = 1;
  @Input() pageSize: number = 10;
  @Output() pageNumberChange = new EventEmitter();

  prevPage() {

  }

  nextPage(){

  }

  toggle() {
    this.isActive = !this.isActive;
  }

  setPageSize(pageSize: number) {
    this.pageSize = pageSize;
    this.pageNumberChange.emit(this.pageSize);
  }

}
