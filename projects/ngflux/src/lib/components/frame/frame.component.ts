import { booleanAttribute, Component, computed, inject, input } from "@angular/core";

import { FrameOptions, FrameSize } from "../../interfaces";

@Component({
  selector: 'ngf-frame',
  templateUrl: 'frame.component.html',
  styleUrls: ['frame.component.scss'],
  imports: [],
  host: {
    '[class.viewport]': 'viewport()',
  },
})
export class NgFluxFrame {

  readonly viewport = input(false, { transform: booleanAttribute });

  readonly options = input<FrameOptions>({});

  protected readonly title = computed(() => this.options().title ?? '');
  protected readonly icon = computed(() => this.options().icon ?? '');
  protected readonly menu = computed(() => this.options().menu ?? []);
  protected readonly toolbarItems = computed(() => this.options().toolbarItems ?? []);

}
