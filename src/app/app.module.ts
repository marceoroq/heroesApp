import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AppRouterModule } from './app-router.module';

@NgModule({
    declarations: [AppComponent, ErrorPageComponent],
    imports: [BrowserModule, BrowserAnimationsModule, AppRouterModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
