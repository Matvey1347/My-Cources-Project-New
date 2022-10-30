import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if(!condition) {
      this.containerRef.createEmbeddedView(this.el);
    } else {
      this.containerRef.clear();
    }
  }

  constructor(private el: TemplateRef<any>, private containerRef: ViewContainerRef) { }

}
