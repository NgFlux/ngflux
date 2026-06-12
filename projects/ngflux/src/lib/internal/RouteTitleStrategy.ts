import { inject, Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRouteSnapshot, RouterStateSnapshot, TitleStrategy } from "@angular/router";
import { NGF_CONFIG, NgFluxRoute } from "../interfaces";

@Injectable({ providedIn: 'root' })
export class RouteTitleStrategy extends TitleStrategy {

  private readonly config = inject(NGF_CONFIG);
  private readonly service = inject(Title);

  private getChildSnapshot(snapshot: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    if (snapshot.firstChild) return this.getChildSnapshot(snapshot.firstChild);
    return snapshot;
  }

  private getParentTitle(snapshot: ActivatedRouteSnapshot): string | undefined {
    if (snapshot.parent) {
      const title = snapshot.parent.title;
      if (title) return title;

      return this.getParentTitle(snapshot.parent);
    }

    return undefined;
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const { config, service } = this;
    const entries: string[] = [];

    if (config.title?.prefix) entries.push(config.title.prefix);

    const child = this.getChildSnapshot(snapshot.root);
    const routeConfig = (child.routeConfig ?? {}) as NgFluxRoute;

    let routeTitle = routeConfig.getTitle?.(child.data) ?? this.buildTitle(snapshot);

    if (routeConfig.addParentTitle) {
      const parentTitle = this.getParentTitle(child);

      if (parentTitle) {
        const separator = routeConfig.parentTitleSeparator ?? ' - ';

        if (routeTitle) {
          routeTitle += separator + parentTitle;
        } else {
          routeTitle = parentTitle;
        }
      }
    }

    if (routeTitle) entries.push(routeTitle);
    if (config.title?.suffix) entries.push(config.title.suffix);

    const separator = config.title?.separator ?? ' | ';
    const title = entries.join(separator);

    if (title) service.setTitle(title);
  }

}
