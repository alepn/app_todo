import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-todo-modal',
  templateUrl: './edit-todo-modal.page.html',
  styleUrls: ['./edit-todo-modal.page.scss'],
})
export class EditTodoModalPage implements OnInit {

  @Input() modalController: ModalController;
  @Input() todo;

  constructor() { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss(null);
  }

  async submitForm(){    
    this.modalController.dismiss(this.todo);
  }

}
