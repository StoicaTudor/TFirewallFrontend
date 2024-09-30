import {bootstrapApplication} from '@angular/platform-browser';
import {provideHttpClient} from "@angular/common/http";
import {AppComponent} from "./app/app.component";
import {environment} from "./environments/environment";
import {enableProdMode} from "@angular/core";
import {AppRoutingModule} from "./app/routing/app.routes";
import {provideRouter} from "@angular/router";

if (environment.production) {
  enableProdMode();
}

// Bootstrap the application with AppComponent, routing, and HttpClient
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(AppRoutingModule), // Use provideRouter with routes array
    provideHttpClient() // Provide the HttpClientModule
  ]
}).catch(err => console.error(err));
