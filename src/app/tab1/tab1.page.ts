import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';






@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  today;

  constructor(public actionSheetController: ActionSheetController , private menu: MenuController) {
    this.today = new Date().toISOString();
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  async presentActionSheet(event: Event) {
    const actionSheet = await this.actionSheetController.create({
    
      buttons: [{
        text: 'Mark completed',
        role: 'destructive',
        // cssClass: 'actionButton',
  
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Edit',
        cssClass: 'actionButton',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Create New Task',
        cssClass: 'actionButton',
        
        handler: () => {
          console.log('Play clicked');
        }
      },  {
        text: 'Cancel',
        cssClass: 'cancelButton',
       
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    
    await actionSheet.present();
    
  }
}
