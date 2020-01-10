import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule,} from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';
import { AddcartComponent } from './component/addcart/addcart.component';
import { DisplayComponent } from './component/display/display.component';
import { OreoInfoService } from './oreo-info.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,AddcartComponent,WelcomeComponent,DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule,
    BrowserAnimationsModule,MatChipsModule,MatSliderModule,MatCardModule,MatToolbarModule,MatIconModule,MatInputModule,MatButtonModule,MatIconModule
  ],
  providers: [OreoInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
