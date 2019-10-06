import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainPageComponent } from './main-page.component';

@NgModule({
    imports: [BrowserModule],
    exports: [MainPageComponent],
    declarations: [MainPageComponent],
    providers: [],
})
export class MainPageModule { }
