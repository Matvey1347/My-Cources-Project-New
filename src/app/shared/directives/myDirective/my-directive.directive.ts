import { Directive, ElementRef, Renderer2,OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  constructor(private el: ElementRef, private renderer: Renderer2) {

    
  }


  ngOnInit() {
  }

  @HostListener('click') myFunction(eventData: Event) {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'green';
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.backgroundColor = 'blue';
  }
}
