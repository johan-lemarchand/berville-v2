import { Routes } from '@angular/router';
import {LayoutWebsiteComponent} from "./layout/layout-website/layout-website.component";
import {NoAuthGuard} from "./core/auth/guards/noAuth.guard";

export const appRoutes: Routes = [
    {path: '', pathMatch : 'full', redirectTo: ''},
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutWebsiteComponent,
        children: [
            {path: '', loadChildren: () => import('app/modules/website/club/club.routes')},
            {path: '', loadChildren: () => import('app/modules/website/actualites/actualites.routes')},
            {path: '', loadChildren: () => import('app/modules/website/event/event.routes')},
            {path: '', loadChildren: () => import('app/modules/website/home/home.routes')},
            {path: '', loadChildren: () => import('app/modules/website/contact/contact.routes')},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.routes')},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.routes')},
            //{path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.routes')},
            //{path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.routes')},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.routes')},
        ]
    },
];
