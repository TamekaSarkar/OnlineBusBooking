import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './user/header/header.component';
import { FooterComponent } from './user/footer/footer.component';
import { SelectBusComponent } from './user/select-bus/select-bus.component';
import { BusSearchResultComponent } from './user/bus-search-result/bus-search-result.component';
import { SelectSeatComponent } from './user/select-seat/select-seat.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { PrintComponent } from './user/print/print.component';

import { SelectBusService } from './user/services/selectBus.service';
import { BookingService } from './user/services/booking.service';
import { UserService } from './user/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    SelectBusComponent,
    BusSearchResultComponent,
    SelectSeatComponent,
    UserFormComponent,
    PrintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [SelectBusService,
    BookingService,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
