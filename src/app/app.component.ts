import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { BaseComponent } from './base.component';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
    </div>
    <h2>Here we will see on how to load components dynamically : </h2>
    <ul>
      <li>
        <button (click)="loadlazy1component()"> Load Component 1 Lazily</button> <br>
      </li>
      <li>
      <button (click)="loadlazy2component()"> Load Component 2 Lazily</button>
      </li>
    </ul>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'lazyloading';

  constructor(private cref: ViewContainerRef, private factory: ComponentFactoryResolver) { }

  async loadlazy1component() {
    this.cref.clear()
    const { Lazy1Component } = await import(`./lazy1.component`);
    this.cref.createComponent(this.factory.resolveComponentFactory(Lazy1Component));
  }

  async loadlazy2component() {
    this.cref.clear()
    const { Lazy2Component } = await import(`./lazy2.component`);
    this.cref.createComponent(this.factory.resolveComponentFactory(Lazy2Component));
  }
}
