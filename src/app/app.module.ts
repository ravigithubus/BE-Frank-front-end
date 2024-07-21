import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { EventsComponent } from './components/events/events.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { LookEventComponent } from './components/events/look-event/look-event.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {MatDialogModule} from '@angular/material/dialog';
import { AddEventComponent } from './forms/add-event/add-event.component';
import { UpdateEventComponent } from './forms/update-event/update-event.component';
import { DeleteEventComponent } from './forms/delete-event/delete-event.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './forms/login/login.component';
import { RegisterComponent } from './forms/register/register.component';
import { ImageGalleryComponent } from './components/events/look-event/image-gallery/image-gallery.component';
import { ImagePreviewComponent } from './forms/image-preview/image-preview.component';
import { CommonModule, DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    EventsComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent,
    LookEventComponent,
    AddEventComponent,
    UpdateEventComponent,
    DeleteEventComponent,
    LoginComponent,
    RegisterComponent,
    ImageGalleryComponent,
    ImagePreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    CommonModule
  ],
  providers: [
    DatePipe 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
