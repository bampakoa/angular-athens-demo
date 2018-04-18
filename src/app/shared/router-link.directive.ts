import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

import { StateService } from '../ajs-upgraded-providers';

@Directive({
  selector: '[appRouterLink]'
})
export class RouterLinkDirective implements OnInit {
  @Input() appRouterLink: string;

  constructor(private state: StateService, private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.renderer.setAttribute(this.el.nativeElement, 'href', this.state.href(this.appRouterLink));
  }
}
