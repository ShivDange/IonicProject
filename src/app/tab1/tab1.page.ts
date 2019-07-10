import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';






@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  today;
  newDate;
  constructor(public actionSheetController: ActionSheetController , private menu: MenuController , private datePicker: DatePicker) {
    this.today = new Date().toISOString();
    
     console.log('today ' , this.today);
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  
  slidePrev() {
    this.today - 1;
    console.log('prev Date' , this.today)
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


  showDatePicker(){
    this.datePicker.show({
    date: new Date(),
    mode: 'date',
    androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
    date => console.log('Got date: ', date),
    err => console.log('Error occurred while getting date: ', err)
    );
    }
    showCalendar() {

      this.datePicker.show({
        date: new Date(),
        mode: 'date',
        titleText: 'set Date',
        
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
      }).then(
        date => console.log('Got date: ', date),
        err => console.log('Error occurred while getting date: ', err)
      );
    
    }
    
}
