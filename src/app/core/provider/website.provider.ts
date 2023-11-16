import { ENVIRONMENT_INITIALIZER, EnvironmentProviders, inject, Provider } from '@angular/core';
import { WebsiteSplashScreenService } from '../splash-screen/splash-screen.service';

export const provideWebsite = (): Array<Provider | EnvironmentProviders> =>
{
    // Base providers
    const providers: Array<Provider | EnvironmentProviders> = [
      /*  importProvidersFrom(MatDialogModule),
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(FuseConfirmationService),
            multi   : true,
        },

        provideHttpClient(withInterceptors([fuseLoadingInterceptor])),
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(FuseLoadingService),
            multi   : true,
        },

        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(FuseMediaWatcherService),
            multi   : true,
        },
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(FusePlatformService),
            multi   : true,
        },*/
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(WebsiteSplashScreenService),
            multi   : true,
        },
       /* {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(FuseUtilsService),
            multi   : true,
        },*/
    ];

    // Return the providers
    return providers;
};
