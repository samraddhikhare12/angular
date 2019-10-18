import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DatepickerTestComponent } from './datepicker-test/datepicker-test.component';
import { TimepickerTestComponent } from './timepicker-test/timepicker-test.component';
import { RatingTestComponent } from './rating-test/rating-test.component';
import { pipe } from 'rxjs';
import { PipeTextComponent } from './pipe-text/pipe-text.component';
import { SwitchComponent } from './switch/switch.component';
import { CarouselTestComponent } from './carousel-test/carousel-test.component';


const routes: Routes = [{path:'greet',component:GreetingComponent},
{path:'product',component:ProductListComponent},
{path:'datepicker',component:DatepickerTestComponent},
{path:'timepicker',component:TimepickerTestComponent},
{path:'rating',component:RatingTestComponent},
{path:'pipe',component:PipeTextComponent},
{path:'switch',component:SwitchComponent},
{path:'carousel',component:CarouselTestComponent},
{path:'',redirectTo:'/greet', pathMatch:'full'},
{path:'**',redirectTo:'/greet', pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 




}
