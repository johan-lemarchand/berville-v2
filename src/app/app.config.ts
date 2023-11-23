import { ApplicationConfig } from '@angular/core';
import {PreloadAllModules, provideRouter, withInMemoryScrolling, withPreloading} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {provideAuth} from "./core/auth/auth.provider";
import {provideWebsite} from "./core/provider/website.provider";
import {provideIcons} from "./core/components/icons/icons.provider";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withPreloading(PreloadAllModules), withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
    provideAnimations(),
    provideAuth(),
    provideWebsite(
      {
        website: {
            layout : 'classy',
            scheme : 'light',
            screens: {
                sm: '600px',
                md: '960px',
                lg: '1280px',
                xl: '1440px',
            },
            theme  : 'theme-default',
            themes : [
                {
                    id  : 'theme-default',
                    name: 'Default',
                },
                {
                    id  : 'theme-brand',
                    name: 'Brand',
                },
                {
                    id  : 'theme-teal',
                    name: 'Teal',
                },
                {
                    id  : 'theme-rose',
                    name: 'Rose',
                },
                {
                    id  : 'theme-purple',
                    name: 'Purple',
                },
                {
                    id  : 'theme-amber',
                    name: 'Amber',
                },
            ],
        },
      }
    ),
    provideAnimations(),
    provideIcons(),
]
};
