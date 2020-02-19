import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { EventiComponent } from './eventi/eventi.component';

const routes: Routes = [
  {path: 'menu' , component: MenuComponent},
  {path: 'eventi' , component: EventiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
