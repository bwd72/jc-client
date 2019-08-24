import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalBaseComponent } from './modals/modal-base/modal-base.component';
import { ConfirmDialogComponent } from './modals/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalBaseComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
