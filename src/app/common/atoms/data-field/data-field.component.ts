import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'data-field',
  templateUrl: './data-field.component.html',
  styleUrls: ['./data-field.component.scss']
})
export class DataFieldComponent implements OnInit {
  @Input() name: string;
  @Input() column: string;

  constructor() { }

  ngOnInit() {
  }

}
