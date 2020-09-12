import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-new-todo-modal',
  templateUrl: './new-todo-modal.page.html',
  styleUrls: ['./new-todo-modal.page.scss'],
})
export class NewTodoModalPage implements OnInit {

  @Input() modalController: ModalController;
  public todo = {
    'title': '',
    'dateTime': '',
    'shortDescription': '',
    'detail': ''
  }

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss(null);
  }

  async submitForm(){    
    if(this.todo.title == ''){
      const alert = await this.alertController.create({
        header: 'Aviso',
        message: 'Preencha o campo Título!',
        buttons: ['OK']
      });
      await alert.present();
    }
    else{
      this.modalController.dismiss(this.todo);
    }
  }

}
