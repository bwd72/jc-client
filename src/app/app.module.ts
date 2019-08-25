import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalBaseComponent } from './modals/modal-base/modal-base.component';
import { ConfirmDialogComponent } from './modals/confirm-dialog/confirm-dialog.component';
import { UserOptionsComponent } from './users/user-options/user-options.component';
import { UserDisplayComponent } from './users/user-display/user-display.component';
import { UserHeaderComponent } from './users/user-header/user-header.component';
import { GridHeaderComponent } from './common/atoms/grid-header/grid-header.component';
import { UsersComponent } from './users/users.component';
import { GridSearchFieldComponent } from './common/atoms/grid-search-field/grid-search-field.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalBaseComponent,
    ConfirmDialogComponent,
    UserOptionsComponent,
    UserDisplayComponent,
    UserHeaderComponent,
    GridHeaderComponent,
    UsersComponent,
    GridSearchFieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
