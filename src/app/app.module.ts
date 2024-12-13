import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RentalDealsComponent } from './rental-deals/rental-deals.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { TestImonialsComponent } from './test-imonials/test-imonials.component';
import { HttpClientModule } from '@angular/common/http';
import { AllProductComponent } from './all-product/all-product.component';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './footer/footer.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RentalDealsComponent,
    NavbarComponent,
    HowItWorkComponent,
    WhyChooseUsComponent,
    TestImonialsComponent,
    AllProductComponent,
    DetailsComponent,
    FooterComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
