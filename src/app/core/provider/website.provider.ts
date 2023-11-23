import {ENVIRONMENT_INITIALIZER, EnvironmentProviders, importProvidersFrom, inject, Provider} from '@angular/core';
import { WebsiteSplashScreenService } from '../splash-screen/splash-screen.service';
import {UtilsService} from "../components/services/utils";
import {ConfirmationService} from "../components/confirmation";
import {MatDialogModule} from "@angular/material/dialog";
import {WebsiteConfig} from "../components/services/config";
import {WEBSITE_CONFIG} from "../components/services/config/config.constants";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {MATERIAL_SANITY_CHECKS} from "@angular/material/core";
import {WebsiteMediaWatcherService} from "../components/services/media-watcher";

export type WebsiteProviderConfig = {
    website?: WebsiteConfig
}
export const provideWebsite = (config: WebsiteProviderConfig): Array<Provider | EnvironmentProviders> =>
{
    // Base providers
    const providers: Array<Provider | EnvironmentProviders> = [
        {
            // Disable 'theme' sanity check
            provide : MATERIAL_SANITY_CHECKS,
            useValue: {
                doctype: true,
                theme  : false,
                version: true,
            },
        },
        {
            // Use the 'fill' appearance on Angular Material form fields by default
            provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill',
            },
        },
        {
            provide : WEBSITE_CONFIG,
            useValue: config?.website ?? {},
        },
        {
            provide : WEBSITE_CONFIG,
            useValue: config?.website ?? {},
        },
        importProvidersFrom(MatDialogModule),
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(ConfirmationService),
            multi   : true,
        },
/*
        provideHttpClient(withInterceptors([fuseLoadingInterceptor])),
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(FuseLoadingService),
            multi   : true,
        },
*/
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(WebsiteMediaWatcherService),
            multi   : true,
        },
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(WebsiteSplashScreenService),
            multi   : true,
        },
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(UtilsService),
            multi   : true,
        },
    ];

    // Return the providers
    return providers;
};
