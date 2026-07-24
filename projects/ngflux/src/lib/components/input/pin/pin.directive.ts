import { Directive, ElementRef, inject } from "@angular/core";

@Directive({
  selector: '[pinInput]',
})
export class PinInputDirective {

  private readonly ref: ElementRef<HTMLInputElement> = inject(ElementRef);

  readonly elem = this.ref.nativeElement;

}
