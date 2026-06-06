import {
  Component,
  ComponentRef,
  computed,
  effect,
  HostBinding,
  inject,
  Injector,
  signal,
  viewChild,
  ViewContainerRef,
} from '@angular/core';

import { NgFluxLoadingComponent } from '../main/main.component';
import { NGF_CONFIG, NgFluxLoadingEntry } from '../../../interfaces';

@Component({
  selector: 'ngf-loading-root',
  templateUrl: 'root.component.html',
  styleUrls: ['root.component.scss'],
  imports: [],
})
export class NgFluxLoadingRootComponent {

  private readonly config = inject(NGF_CONFIG);
  private readonly injector = inject(Injector);

  private readonly entries = signal<NgFluxLoadingEntry[]>([]);

  readonly count = computed(() => this.entries().length);
  readonly isLoading = computed(() => this.count() > 0);

  @HostBinding('class.show')
  get showLoading() { return this.isLoading(); }

  readonly viewContainer = viewChild.required('container', { read: ViewContainerRef });

  private componentRef!: ComponentRef<any>;

  constructor() {
    const { config, injector } = this;

    effect(() => {
      const viewContainer = this.viewContainer();
      const component = config.loading?.component ?? NgFluxLoadingComponent;

      const newInjector = Injector.create({
        parent: injector,
        providers: [],
      });

      this.componentRef = viewContainer.createComponent(component, {
        injector: newInjector,
      });
    });
  }

  readonly entry = computed(() => {
    const entries = this.entries();
    return entries.at(entries.length - 1);
  });

  readonly start = (text: string = '') => this.entries.update(v => {
    const entries = Array.from(v);
    entries.push({ text });
    return entries;
  });

  readonly stop = () => this.entries.update(v => {
    const entries = Array.from(v);
    entries.pop();
    return entries;
  });

}
