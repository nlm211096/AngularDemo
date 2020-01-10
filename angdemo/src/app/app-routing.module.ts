import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { AddcartComponent } from './component/addcart/addcart.component';
import { DisplayComponent } from './component/display/display.component';


// {path:'welcome',component:WelcomeComponent},
const routes: Routes = [
{
  path:'welcome',component:WelcomeComponent
  
},
{
  path:'addcart',component:AddcartComponent
},

{
  path:'display',component:DisplayComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
