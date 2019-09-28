import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth.component';
import { AuthService } from './auth.component.service';

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [ AuthService ],
    exports: [ AuthComponent]
})
export class AuthModule { }
