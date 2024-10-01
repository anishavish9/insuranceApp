import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  { path: 'login', component: LoginComponent },
  {path:'home', component: HomeComponent},
  {path:'payment',component:PaymentComponent},
  { path: '', redirectTo: '/register', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
