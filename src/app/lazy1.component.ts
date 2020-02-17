import { Component, OnInit } from '@angular/core';
import { BaseComponent } from './base.component';

@Component({
  templateUrl: './lazy1.component.html',
  styleUrls: ['./lazy1.component.css']
})
export class Lazy1Component extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
