import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  userData: any[] = [];
  pageNumber: number = 1;
  pageSize: number = 10;

  constructor(private tableService: TableService) {

  }
  ngOnInit(): void {
    this.tableService.getUsers(this.pageNumber, this.pageSize).subscribe((res:any) => {
      this.userData = res.data;
    })
  }
  title = 'ng-practice-app';

  onPageChange(pageSize: number) {
    this.tableService.getUsers(this.pageNumber, pageSize).subscribe((res:any) => {
      this.userData = res.data;
    })
  }
}
