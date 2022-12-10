import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';
import { InquiryComponent } from './pages/inquiry/inquiry.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent 
  },
  {
    path: 'product', component: ProductComponent
  },
  {
    path: 'category', component: CategoryComponent
  },
  {
    path: 'inquiry', component: InquiryComponent
  },
  {
    path: 'contactus', component: ContactusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
