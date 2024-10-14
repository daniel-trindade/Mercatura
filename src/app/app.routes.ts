import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OnSaleComponent } from './pages/on-sale/on-sale.component';
import { ConsultComponent } from './pages/consult/consult.component';

export const routes: Routes = [
  {path: "", component: LoginPageComponent},
  {path: "home", component: HomePageComponent},
  {path: "vendas", component: OnSaleComponent},
  {path: "consulta", component: ConsultComponent}
];
