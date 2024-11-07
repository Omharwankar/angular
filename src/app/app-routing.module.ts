import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: ()=> import('./user-list/user-list.module').then(m => m.UserListModule)
  },
  {
    path: 'events',
    loadChildren: ()=> import('./events/events.module').then(m => m.EventsModule)
  },
  {
    path: 'facts',
    loadChildren: ()=> import('./events/events.module').then(m => m.EventsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
