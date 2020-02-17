import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { BaseComponent } from './base.component';

@Component({
  templateUrl: './lazy2.component.html',
  styleUrls: ['./lazy2.component.css']
})
export class Lazy2Component implements OnInit {

  constructor(private vcRef: ViewContainerRef, private cResolver: ComponentFactoryResolver) {
  }

  async ngOnInit(): Promise<void> {
    this.vcRef.clear();
    const { Lazy2child1Component } = await import('./lazy2child1.component');
    this.vcRef.createComponent(this.cResolver.resolveComponentFactory(Lazy2child1Component));

    const { Lazy2child2Component } = await import('./lazy2child2.component');
    this.vcRef.createComponent(this.cResolver.resolveComponentFactory(Lazy2child2Component));

  }

}
