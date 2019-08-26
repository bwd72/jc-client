import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'data-textarea-field',
  templateUrl: './data-textarea-field.component.html',
  styleUrls: ['./data-textarea-field.component.scss']
})
export class DataTextareaFieldComponent implements OnInit {
  @Input() name: string;
  @Input() column: string;
  @Input() rows: string;

  constructor() { }

  ngOnInit() {
  }

}
