import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductNotifyComponent } from './product-notify/product-notify.component';
import { PipeTextComponent } from './pipe-text/pipe-text.component';
import { DatepickerTestComponent } from './datepicker-test/datepicker-test.component';
import { TimepickerTestComponent } from './timepicker-test/timepicker-test.component';
import { RatingTestComponent } from './rating-test/rating-test.component';
import { SwitchComponent } from './switch/switch.component';
import { ReverseStringPipe } from './reverse-string.pipe';
import { CarouselTestComponent } from './carousel-test/carousel-test.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    FooterComponent,
    ProductListComponent,
    ProductNotifyComponent,
    PipeTextComponent,
    DatepickerTestComponent,
    TimepickerTestComponent,
    RatingTestComponent,
    SwitchComponent,
    ReverseStringPipe,
    CarouselTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
