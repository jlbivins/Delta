import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule,
         MatCardModule,
         MatButtonModule,
         MatToolbarModule,
         MatExpansionModule } from '@angular/material';

import { AppComponent } from './app.component';
import { GetCreateComponent } from './post/get-create/get-create.component';
import { GetListComponent } from './post/get-list/get-list.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    GetCreateComponent,
    HeaderComponent,
    GetListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // for NgModule
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
