import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewTodoModalPage } from '../new-todo-modal/new-todo-modal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  itemsTodo = []

  constructor(private modalController: ModalController) {}

  async presentNewTodoModal() {
    const modal = await this.modalController.create({
      component: NewTodoModalPage,
      componentProps: {
        'modalController': this.modalController
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if(data){
      this.itemsTodo.push(data)
    }
  }

}
