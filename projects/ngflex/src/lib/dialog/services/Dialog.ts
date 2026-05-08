import { Injectable } from "@angular/core";
import { NgFlexComponent } from "../../core";
import { NgFlexDialogConfig } from "../interfaces/Dialog";
import { NgFlexDialogInstance } from "./DialogInstance";
import { DialogRootMap } from "../internal/Mapper";

@Injectable({ providedIn: 'root' })
export class NgFlexDialog {

  open<T = any>(component: NgFlexComponent<any>, config?: NgFlexDialogConfig): NgFlexDialogInstance<T> {
    config ??= {};
    config.backdropClose ??= true;
    config.closeBtn ??= true;
    config.closeOnBackBtn ??= true;
    config.closeOnEsc ??= true;

    const root = DialogRootMap.get(this);

    if (!root) throw new Error(
      '"ngf-dialog-root" component not found. ' +
      'Use "<ngf-root></ngf-root>" in your root component to enable all NgFlex features or ' +
      'add "<ngf-dialog-root></ngf-dialog-root>" to your root component to enable the NgFlexDialog feature.'
    );

    const onClosed = (ins: NgFlexDialogInstance<T>) => {
      // this.registry.remove(ins);
    };

    const instance = new NgFlexDialogInstance<T>(
      root.viewContainer(),
      component,
      root.injector,
      onClosed,
      config
    );

    // this.registry.add(instance);

    return instance;
  }

  // readonly closeAll = () => this.registry.closeAll();

  // alert(title: string, message: string) {
  //   const data: NGSuiteDialogPopupOptions = { title, message };

  //   const dialog = this.open(NGSuiteDialogAlertComponent, {
  //     closeOnBackBtn: false,
  //     backdropClose: false,
  //     closeOnEsc: false,
  //     data
  //   });

  //   return dialog.afterClosed;
  // }

  // success(title: string, message: string) {
  //   message = `<div class="mbi-success">${message}</div>`;
  //   return this.alert(title, message);
  // }

  // error(title: string, message: string) {
  //   message = `<div class="mbi-error">${message}</div>`;
  //   return this.alert(title, message);
  // }

  // confirm(title: string, message: string): Observable<boolean> {
  //   const data: NGSuiteDialogPopupOptions = { title, message };

  //   const dialog = this.open(NGSuiteDialogConfirmComponent, {
  //     closeOnBackBtn: false,
  //     backdropClose: false,
  //     closeOnEsc: false,
  //     data
  //   });

  //   return dialog.afterClosed;
  // }

}
