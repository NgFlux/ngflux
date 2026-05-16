import { NgFlexLoadingRootComponent } from "../components/root/root.component";
import { NgFlexLoading } from "../services/Loading";

class LoadingRootMapper {

  private readonly map = new Map<NgFlexLoading, NgFlexLoadingRootComponent>();

  attach(instance: NgFlexLoading, root: NgFlexLoadingRootComponent) {
    if (this.map.has(instance)) return;
    this.map.set(instance, root);
  }

  detach(instance: NgFlexLoading) {
    this.map.delete(instance);
  }

  get(instance: NgFlexLoading) {
    return this.map.get(instance);
  }

}

export const LoadingRootMap = new LoadingRootMapper();
