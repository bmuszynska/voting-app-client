import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.scss']
})
export class NewPersonComponent {
  @Input() public inputLabel: string = "";
  public isInputVisible: boolean = false;
  @Input() public label: string = "";
  @Output() public onNewPersonNameProvided = new EventEmitter<string>();
  public voterForm = new FormGroup({
    personName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.pattern('[a-zA-Z ]*')
    ])
  });

  public get personFromControl() {
    return this.voterForm.get('personName');
  }

  public isButtonVisible(): boolean {
    return !this.isInputVisible;
  }

  public onSubmit() {
    if (this.voterForm.valid) {
      const newPersonName = this.personFromControl?.value;
      this.voterForm.reset();
      this.isInputVisible = false;
      this.onNewPersonNameProvided.emit(newPersonName ?? '');
    }
  }

  public showInput() {
    this.isInputVisible = !this.isInputVisible;
  }
}
