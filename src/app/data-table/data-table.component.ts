import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  @Input() public columns: string[] = [];
  @Input() public dataSource: any;
  @Input() public displayedColumns:string[] = [];
  @Input() public info: string = "";
}
