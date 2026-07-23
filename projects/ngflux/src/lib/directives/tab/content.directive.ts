import { Directive, inject, TemplateRef } from "@angular/core";

@Directive({
  selector: '[ngfTabContent]',
  exportAs: 'content',
})
export class NgFluxTabContentDirective {

  readonly templateRef = inject(TemplateRef);

}
