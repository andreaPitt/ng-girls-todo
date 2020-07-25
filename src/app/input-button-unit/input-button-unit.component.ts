import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input [value]="title"
      (keyup.enter)="submitValue($event.target.value)">
    <button (click)="submitValue('Button Clicked!')">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = "Hello world";
  @Output() submit: EventEmitter<string> = new EventEmitter();
  constructor() {

   }

  ngOnInit(): void {

  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }

}
