import { inject, Injectable } from "@angular/core";
import { Meta } from "@angular/platform-browser";
import { ActivationEnd, Router } from "@angular/router";
import { filter, map } from "rxjs";

import { NgFluxRoute } from "../interfaces";

@Injectable({ providedIn: 'root' })
export class MetaInternal {

  private readonly meta = inject(Meta);
  private readonly router = inject(Router);

  private readonly snapshot = this.router.events.pipe(
    filter(e => e instanceof ActivationEnd),
    filter(e => !e.snapshot.firstChild),
    map(e => e.snapshot),
  );

  initialize() {
    const { meta, snapshot } = this;

    const initialDescription = meta.getTag('name="description"')?.content;
    const initialKeywords = meta.getTag('name="keywords"')?.content;

    snapshot.subscribe(snap => {
      const config = (snap.routeConfig ?? {}) as NgFluxRoute;

      const description = config.getDescription?.(snap.data) ?? config.description ?? initialDescription;
      if (description) meta.updateTag({ name: 'description', content: description });

      let keywords = config.getKeywords?.(snap.data) ?? config.keywords ?? initialKeywords;
      if (Array.isArray(keywords)) keywords = keywords.join(', ');
      if (keywords) meta.updateTag({ name: 'keywords', content: keywords });
    });
  }

}
