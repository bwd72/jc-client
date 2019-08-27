import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConfirmDialogComponent } from './modals/confirm-dialog/confirm-dialog.component';
import { UserOptionsComponent } from './users/user-options/user-options.component';
import { UserDisplayComponent } from './users/user-display/user-display.component';
import { UserHeaderComponent } from './users/user-header/user-header.component';
import { GridHeaderComponent } from './common/atoms/grid-header/grid-header.component';
import { UsersComponent } from './users/users.component';
import { GridSearchFieldComponent } from './common/atoms/grid-search-field/grid-search-field.component';
import { UserEditorDialogComponent } from './modals/user-editor-dialog/user-editor-dialog.component';
import { DataFieldComponent } from './common/atoms/data-field/data-field.component';
import { DataTextareaFieldComponent } from './common/atoms/data-textarea-field/data-textarea-field.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    UserOptionsComponent,
    UserDisplayComponent,
    UserHeaderComponent,
    GridHeaderComponent,
    UsersComponent,
    GridSearchFieldComponent,
    UserEditorDialogComponent,
    DataFieldComponent,
    DataTextareaFieldComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
