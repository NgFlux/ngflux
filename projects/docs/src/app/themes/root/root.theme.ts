import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { DateTime } from "luxon";

@Component({
  selector: 'root-theme',
  templateUrl: 'root.theme.html',
  styleUrls: ['root.theme.scss'],
  imports: [
    RouterLink,
  ],
})
export class RootTheme {

  protected readonly year = DateTime.now().year;

}
