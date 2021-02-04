import { Directive, ElementRef, Input, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSubrayado]' // atributo
  // selector: '.appSubrayado' como clase
})
export class SubrayadoDirective {

  @HostBinding('class') isHover: string;

  @Input('appSubrayado') config: any;
  // @Input() config: any;

  constructor(private elem: ElementRef,private renderer: Renderer2) {
    

    this.config = {
      colorHover: 'green',
      colorNoHover: 'red'
    };

    // elem.nativeElement.style.textDecoration = 'underline';
    renderer.setStyle(elem.nativeElement, 'text-decoration', 'underline');
    renderer.setStyle(elem.nativeElement, 'color', 'indigo');

   }

   @HostListener('mouseover') onHover() {

    this.renderer.setStyle(this.elem.nativeElement, 'color', this.config.colorHover);
    this.isHover = 'hover';
   }
   @HostListener('mouseout') onMouseOut() {

    this.renderer.setStyle(this.elem.nativeElement, 'color', this.config.colorNoHover);
    this.isHover = 'noHover';
   }

}
