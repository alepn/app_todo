import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewTodoModalPage } from '../new-todo-modal/new-todo-modal.page';
import { EditTodoModalPage } from '../edit-todo-modal/edit-todo-modal.page';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  itemsTodo = []

  constructor(private apiService: ApiService, private modalController: ModalController, private alertController: AlertController) {
    this.apiService.getToDos().subscribe((result:any) => {  
      this.itemsTodo = result
    })
  }

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

  async editTodoModal(todo) {
    const modal = await this.modalController.create({
      component: EditTodoModalPage,
      componentProps: {
        'modalController': this.modalController,
        'todo': todo
      }
    });
    await modal.present();
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
