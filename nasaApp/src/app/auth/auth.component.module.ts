import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth.component';
import { AuthService } from './auth.component.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [AuthService],
    exports: [AuthComponent]
})
export class AuthModule { }
