import { ComponentRef, Injector, signal, ViewContainerRef } from "@angular/core";
import { AsyncSubject } from "rxjs";

import { NgFlexComponent } from "../../core";
import { NgFlexDialogCommand, NgFlexDialogConfig, NgFlexDialogEvents } from "../interfaces/Dialog";
import { NgFlexDialogComponent } from "../components/dialog/dialog.component";
import { NgFlexDialogRef } from "./DialogRef";
import { NGF_DIALOG_CLOSE_FN, NGF_DIALOG_CONFIG, NGF_DIALOG_CONTENT, NGF_DIALOG_INSTANCE } from "../internal/Tokens";

type OnClosedFn<T = any> = (ins: NgFlexDialogInstance<T>) => void;

export class NgFlexDialogInstance<T = any> {



  private readonly xDialogComponentRef: ComponentRef<NgFlexDialogComponent> = null as any;

  private readonly xClosing = new AsyncSubject<T | null>();
  private readonly xAfterClosed = new AsyncSubject<T | null>();

  readonly events: NgFlexDialogEvents<T> = {
    closing: this.xClosing.asObservable(),
    closed: this.xAfterClosed.asObservable(),
  };

  constructor(
    private readonly viewContainer: ViewContainerRef,
    private readonly component: NgFlexComponent<any>,
    private readonly injector: Injector,
    private readonly onClosed: OnClosedFn<T>,
    readonly config: NgFlexDialogConfig,
  ) {
    const dialogRef = new NgFlexDialogRef<T>(this.onCommand);

    const newInjector = Injector.create({
      parent: injector,
      providers: [
        { provide: NgFlexDialogRef, useValue: dialogRef },
        { provide: NGF_DIALOG_CONFIG, useValue: config },
        { provide: NGF_DIALOG_CONTENT, useValue: component },
        { provide: NGF_DIALOG_CLOSE_FN, useValue: this.afterClosedFn },
        { provide: NgFlexDialogInstance, useValue: this }
      ],
    });

    this.xDialogComponentRef = viewContainer.createComponent(NgFlexDialogComponent, {
      injector: newInjector,
      index: undefined
    });
  }

  private readonly onCommand = (cmd: NgFlexDialogCommand<T>) => {
    const { config } = this;

    switch (cmd.name) {
      case 'esc.close': {
        if (config.closeOnEsc) this.close();
      } break;

      case 'backdrop.close': {
        if (config.backdropClose) this.close();
      } break;

      case 'backButton.close': {
        if (config.closeOnBackBtn) this.close();
      } break;

      case 'close': {
        this.close(cmd.value);
      } break;
    }
  }

  private readonly afterClosedFn = (data?: T) => {
    const { xDialogComponentRef } = this;
    xDialogComponentRef.destroy();

    this.xAfterClosed.next(data ?? null);
    this.xAfterClosed.complete();

    this.onClosed(this);
  }

  focus() {
    const { xDialogComponentRef: { instance } } = this;
    instance.focus();
  }

  close(data?: T) {
    const { xDialogComponentRef } = this;

    this.xClosing.next(data ?? null);
    this.xClosing.complete();

    xDialogComponentRef.instance.close(data);
  }

  send(cmd: NgFlexDialogCommand<T>) {
    this.onCommand(cmd);
  }

}
