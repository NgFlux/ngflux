import { Component, ComponentRef, computed, effect, HostBinding, inject, Injector, signal, viewChild, ViewContainerRef } from "@angular/core";
import { NgFlexLoadingComponent } from "../loading/loading.component";
import { NgFlexLoadingInternal } from "../../internal/Loading";
import { NGF_CONFIG } from "../../../core";

@Component({
  selector: 'ngf-loading-root',
  templateUrl: 'root.component.html',
  styleUrls: ['root.component.scss'],
  imports: [],
})
export class NgFlexLoadingRootComponent {

  private readonly config = inject(NGF_CONFIG);
  private readonly internal = inject(NgFlexLoadingInternal);
  private readonly injector = inject(Injector);

  @HostBinding('class.show')
  get isLoading() { return this.internal.isLoading() }

  readonly viewContainer = viewChild.required('container', { read: ViewContainerRef });

  private componentRef!: ComponentRef<any>;

  constructor() {
    const { config, injector } = this;

    effect(() => {
      const viewContainer = this.viewContainer();
      const component = config.loadingComponent ?? NgFlexLoadingComponent;

      const newInjector = Injector.create({
        parent: injector,
        providers: [],
      });

      this.componentRef = viewContainer.createComponent(component, {
        injector: newInjector,
      });
    });
  }

}
