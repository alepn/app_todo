import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTodoModalPageRoutingModule } from './edit-todo-modal-routing.module';

import { EditTodoModalPage } from './edit-todo-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTodoModalPageRoutingModule
  ],
  declarations: [EditTodoModalPage]
})
export class EditTodoModalPageModule {}
