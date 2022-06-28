import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormFillComponent } from './form-fill/form-fill.component';
import { FormsModule } from '@angular/forms';
import { ResumePreviewComponent } from './resume-preview/resume-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FormFillComponent,
    ResumePreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
