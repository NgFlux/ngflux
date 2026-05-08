import { ComponentRef, Injector, signal, ViewContainerRef } from "@angular/core";
import { AsyncSubject } from "rxjs";

import { NgFlexComponent } from "../../core";
import { NgFlexDialogCommand, NgFlexDialogConfig } from "../interfaces/Dialog";
import { NgFlexDialogComponent } from "../components/dialog/dialog.component";
import { NgFlexDialogRef } from "./DialogRef";
import { NGF_DIALOG_CONFIG, NGF_DIALOG_CONTENT } from "../internal/Tokens";

type OnClosedFn<T = any> = (ins: NgFlexDialogInstance<T>) => void;

export class NgFlexDialogInstance<T = any> {

  private readonly xDialogComponentRef: ComponentRef<NgFlexDialogComponent> = null as any;

  private readonly xAfterClosed = new AsyncSubject<T | undefined>();
  readonly afterClosed = this.xAfterClosed.asObservable();

  constructor(
    private readonly viewContainer: ViewContainerRef,
    private readonly component: NgFlexComponent<any>,
    private readonly injector: Injector,
    private readonly onClosed: OnClosedFn<T>,
    private readonly config: NgFlexDialogConfig,
  ) {
    const dialogRef = new NgFlexDialogRef<T>(this.onCommand);

    const newInjector = Injector.create({
      parent: injector,
      providers: [
        { provide: NgFlexDialogRef, useValue: dialogRef },
        { provide: NGF_DIALOG_CONFIG, useValue: config },
        { provide: NGF_DIALOG_CONTENT, useValue: component }
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
        // if (config.closeOnEsc) this.close();
      } break;

      case 'backdrop.close': {
        // if (config.backdropClose) this.close();
      } break;

      case 'close': {
        // this.close(cmd.value);
      } break;
    }
  }

  focus() {
    const { xDialogComponentRef: { instance } } = this;
    instance.focus();
  }

  close(data?: T) {
    const { xDialogComponentRef } = this;
    xDialogComponentRef.destroy();

    this.xAfterClosed.next(data);
    this.xAfterClosed.complete();

    this.onClosed(this);
  }

  send(cmd: NgFlexDialogCommand<T>) {
    this.onCommand(cmd);
  }

}
