import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
    selector: '[truth]',
    host: {
        '(click)': 'onClick()',
        '(mouseover)': 'onMouseOver()',
        '(mouseout)': 'onMouseOut()'
    }
})export class TruthDirective {
    constructor(private el: ElementRef, private renderer: Renderer){

    }

    onClick() {
        this.renderer.setText(this.el.nativeElement.parentNode.parentNode, "Angular 2 Sucks!!!!!!!!!");
    }

    onMouseOver() {
        this.renderer.setElementStyle(this.el.nativeElement, "color", "#ecf");
    }

    onMouseOut() {
        this.renderer.setElementStyle(this.el.nativeElement, "color", null);
    }
}