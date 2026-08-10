import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanActivateFn,
  CanDeactivateFn,
  CanMatchFn,
  GuardResult,
  MaybeAsync,
  PartialMatchRouteSnapshot,
  Route,
  RouterStateSnapshot,
  UrlSegment,
} from "@angular/router";

import { from, Observable, of, switchMap } from "rxjs";

export namespace NgFlux.SerialGuard {

  export function canActivateFn(...guards: CanActivateFn[]): CanActivateFn {
    return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> => {
      let result: MaybeAsync<GuardResult> = of(true);

      for (let guard of guards) {
        result = result.pipe(
          switchMap(resp => {
            if (resp !== true) return of(resp);

            const output = guard(route, state);
            if (output instanceof Observable) return output;
            if (output instanceof Promise) return from(output);

            return of(output);
          })
        );
      }

      return result;
    };
  }

  export function canActivateChildFn(...guards: CanActivateChildFn[]): CanActivateChildFn {
    return canActivateFn(...guards);
  }

  export function canDeactivateFn<T>(...guards: CanDeactivateFn<T>[]): CanDeactivateFn<T> {
    return (component: T, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): MaybeAsync<GuardResult> => {
      let result: MaybeAsync<GuardResult> = of(true);

      for (let guard of guards) {
        result = result.pipe(
          switchMap(resp => {
            if (resp !== true) return of(resp);

            const output = guard(component, currentRoute, currentState, nextState);
            if (output instanceof Observable) return output;
            if (output instanceof Promise) return from(output);

            return of(output);
          })
        );
      }

      return result;
    };
  }

  export function canMatchFn(...guards: CanMatchFn[]): CanMatchFn {
    return (route: Route, segments: UrlSegment[], currentSnapshot: PartialMatchRouteSnapshot): MaybeAsync<GuardResult> => {
      let result: MaybeAsync<GuardResult> = of(true);

      for (let guard of guards) {
        result = result.pipe(
          switchMap(resp => {
            if (resp !== true) return of(resp);

            const output = guard(route, segments, currentSnapshot);
            if (output instanceof Observable) return output;
            if (output instanceof Promise) return from(output);

            return of(output);
          })
        );
      }

      return result;
    }
  }

}
