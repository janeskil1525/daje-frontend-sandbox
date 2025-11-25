import { inject } from '@angular/core';
import type {ActivatedRouteSnapshot, RouterStateSnapshot, ResolveFn } from '@angular/router';
import {ObjectService} from "./object.service";

export const objectResolver: ResolveFn<boolean> = (route:ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    const object = inject(ObjectService);

    return object.load(6);
};
