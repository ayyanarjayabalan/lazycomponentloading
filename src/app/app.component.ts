import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { BaseComponent } from './base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'lazyloading';

  constructor(private vcRef: ViewContainerRef, private cResolver: ComponentFactoryResolver) { }

  async loadlazy1component() {
    this.vcRef.clear();
    const { Lazy1Component } = await import('./lazy1.component');
    this.vcRef.createComponent(this.cResolver.resolveComponentFactory(Lazy1Component));
  }

  async loadlazy2component() {
    this.vcRef.clear();
    const { Lazy2Component } = await import('./lazy2.component');
    this.vcRef.createComponent(this.cResolver.resolveComponentFactory(Lazy2Component));
  }

}
