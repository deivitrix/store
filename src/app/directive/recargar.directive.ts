import { Directive, TemplateRef, ViewContainerRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appRecargar]'
})
export class RecargarDirective implements OnChanges {

  @Input() appRecargar!:any;

    constructor(private templateRef:TemplateRef<any>,
    private viewcontainer:ViewContainerRef) {
      this.viewcontainer.createEmbeddedView(templateRef)
    }
  ngOnChanges(changes: SimpleChanges)
  {
    console.log('hola');

    if(changes['appRecargar']){
      this.viewcontainer.clear();
      this.viewcontainer.createEmbeddedView(this.templateRef);
    }
  }

}
