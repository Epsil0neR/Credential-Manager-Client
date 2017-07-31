// Base imports
import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';

import { User } from './models/User';

// Components
import { AppComponent } from './components/app/app.component';
import { AlertComponent } from './components/alert/alert.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routing } from './app-routing.module';

// Services
import { ElectronService } from './providers/electron.service';
import { BaseApiService } from './services/base.api.service';
import { AuthGuard } from './guards/auth.guard'
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [
    ElectronService,
    AlertService,
    BaseApiService,
    AuthenticationService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
