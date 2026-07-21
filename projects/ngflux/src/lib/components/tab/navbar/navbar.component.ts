import { Component, inject, output } from "@angular/core";
import { TabNavController } from "../../../internal";

@Component({
  selector: 'ngf-tab-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss'],
  providers: [TabNavController],
  imports: [],
})
export class NgFluxTabNavbar {

  private readonly ctrl = inject(TabNavController);

  readonly select = output<number>();

}
