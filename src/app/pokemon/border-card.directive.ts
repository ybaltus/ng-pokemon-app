import {Directive, ElementRef, HostListener, Input} from "@angular/core";

@Directive({
  selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {
  private defaultColor: string = '#009688';
  private initialColor: string = '#f5f5f5';

  constructor(private el: ElementRef) {
    // this.setHeight(250);
    this.setBorder(this.initialColor);
  }

  @Input('pokemonBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor)
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
