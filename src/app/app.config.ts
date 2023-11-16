import { ApplicationConfig } from '@angular/core';
import {PreloadAllModules, provideRouter, withInMemoryScrolling, withPreloading} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {provideAuth} from "./core/auth/auth.provider";
import {provideWebsite} from "./core/provider/website.provider";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withPreloading(PreloadAllModules), withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
    provideAnimations(),
    provideAuth(),
    provideWebsite(),
    provideAnimations()
]
};
