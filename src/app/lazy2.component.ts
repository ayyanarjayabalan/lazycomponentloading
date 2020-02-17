import { Component, OnInit } from '@angular/core';
import { BaseComponent } from './base.component';

@Component({
  templateUrl: './lazy2.component.html',
  styleUrls: ['./lazy2.component.css']
})
export class Lazy2Component extends BaseComponent implements OnInit {

  constructor() { super() }

  ngOnInit(): void {
  }

}
