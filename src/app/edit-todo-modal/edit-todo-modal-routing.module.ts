import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTodoModalPage } from './edit-todo-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EditTodoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTodoModalPageRoutingModule {}
