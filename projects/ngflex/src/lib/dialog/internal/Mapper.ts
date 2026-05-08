import type { NgFlexDialogRootComponent } from "../components/root/root.component";
import type { NgFlexDialog } from "../services/Dialog";

class DialogRootMapper {

  private readonly map = new Map<NgFlexDialog, NgFlexDialogRootComponent>();

  attach(instance: NgFlexDialog, root: NgFlexDialogRootComponent) {
    if (this.map.has(instance)) return;
    this.map.set(instance, root);
  }

  detach(instance: NgFlexDialog) {
    this.map.delete(instance);
  }

  get(instance: NgFlexDialog) {
    return this.map.get(instance);
  }

}

export const DialogRootMap = new DialogRootMapper();
