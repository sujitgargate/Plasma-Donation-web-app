import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDonerComponent } from './create-doner/create-doner.component';
import { ListDonerComponent } from './list-doner/list-doner.component';

const routes: Routes = [
  {
    path: "create-doner", component: CreateDonerComponent
  },
  {
    path: "list-of-doners", component: ListDonerComponent
  },
  {
    path: "notify", component: ListDonerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
