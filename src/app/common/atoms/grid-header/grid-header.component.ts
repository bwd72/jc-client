import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grid-header',
  templateUrl: './grid-header.component.html',
  styleUrls: ['./grid-header.component.scss']
})
export class GridHeaderComponent implements OnInit {
  @Input() name: string;
  @Input() column: string;

  constructor() { }

  ngOnInit() {
  }

}
