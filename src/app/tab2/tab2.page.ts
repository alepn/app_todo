import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewTodoModalPage } from '../new-todo-modal/new-todo-modal.page';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  itemsTodo = [
    {
      id: 1,
      title: 'teste1',
      dateTime: '29/09/20',
      shortDescription: 'teste1'
    },
    {
      id: 2,
      title: 'teste2',
      dateTime: '29/09/20',
      shortDescription: 'teste2'
    }
  ]

  constructor(private modalController: ModalController, private alertController: AlertController) {}

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

  async deleteTodo(todo){
    
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: `Deseja excluir a tarefa "${todo.title}"`,
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {}
        }, {
          text: 'Deletar',
          handler: () => {

            this.itemsTodo.forEach((item, index) =>{
              if(todo.id === item.id){
                this.itemsTodo.splice(index,1);
              }
            })

          }
        }
      ]
    });
    await alert.present();

  }

}
