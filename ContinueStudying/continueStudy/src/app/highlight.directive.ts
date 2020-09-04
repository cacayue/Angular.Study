import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() highlightColor: string;
  @Input('appHighlight') highlightColor2: string;
  @Input() defaultColor: string;
  constructor(private el: ElementRef) {

   }

   @HostListener('mouseenter') onMouseEnter(): void{
    this.highlight(this.highlightColor2 || this.defaultColor || 'red');
   }

   @HostListener('mouseleave') onLeave(): void{
    this.highlight(null);

   }

   private highlight(color: string): void {
      this.el.nativeElement.style.background = color;
   }
}
