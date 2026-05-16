import { Component, computed, inject, signal, viewChild, ViewContainerRef } from "@angular/core";
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

  readonly viewContainer = viewChild.required('container', { read: ViewContainerRef });

}
