import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { IPerson } from '../models/person';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() public label: string = '';
  @Input() public options: IPerson[] = [];
  @Output() public selectionChange = new EventEmitter<IPerson>();

  public onValueChange(event: MatSelectChange) {
    this.selectionChange.emit(event.value);
  }
}
