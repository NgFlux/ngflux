import { Component, ComponentRef, effect, ElementRef, inject, Injector, viewChild, ViewContainerRef } from "@angular/core";
import { NGF_DIALOG_CONFIG, NGF_DIALOG_CONTENT } from "../../internal/Tokens";
import { NgFlexDialogRef } from "../../services/DialogRef";
import { NGF_DIALOG_DATA } from "../../interfaces/Dialog";
import { NgFlexDialogInstance } from "../../services/DialogInstance";

@Component({
  selector: 'ngf-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.scss'],
  imports: [],
})
export class NgFlexDialogComponent {

  private readonly injector = inject(Injector);
  private readonly instance = inject(NgFlexDialogInstance);
  private readonly dialogRef = inject<NgFlexDialogRef<any>>(NgFlexDialogRef);
  private readonly content = inject(NGF_DIALOG_CONTENT);
  private readonly config = inject(NGF_DIALOG_CONFIG);
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);

  readonly viewContainer = viewChild.required('container', { read: ViewContainerRef });

  private componentRef!: ComponentRef<any>;

  constructor() {
    const { el, injector, content, config } = this;

    effect((onCleanup) => {
      const viewContainer = this.viewContainer();

      const newInjector = Injector.create({
        parent: injector,
        providers: [
          { provide: NGF_DIALOG_DATA, useValue: config?.data ?? null },
        ]
      });

      this.componentRef = viewContainer.createComponent(content, {
        injector: newInjector
      });

      const { nativeElement } = this.componentRef.location as ElementRef<HTMLElement>;

      nativeElement.tabIndex = -1;
      nativeElement.classList.add('ngf-dialog-box');
      nativeElement.focus();

      el.nativeElement.addEventListener('click', this.onBackdropClick);
      nativeElement.addEventListener('click', e => this.onComponentClick);

      onCleanup(() => {
        el.nativeElement.removeEventListener('click', this.onBackdropClick);
        nativeElement.removeEventListener('click', e => this.onComponentClick);
      });
    });
  }

  private readonly onComponentClick = (e: MouseEvent) => {
    e.stopPropagation();
  }

  private readonly onBackdropClick = (e: MouseEvent) => {
    const { instance } = this;

    instance.send({
      name: 'backdrop.close',
      value: false,
    });
  }

  focus() {
    const { nativeElement } = this.componentRef.location as ElementRef<HTMLElement>;
    nativeElement.focus();
  }

}
