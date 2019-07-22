import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { HttpClient } from '@angular/common/http';







@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  today;
  newDate;
  monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  constructor(public actionSheetController: ActionSheetController, private menu: MenuController, private datePicker: DatePicker, private http: HttpClient) {
     this.http.get('https://172.31.3.38:8000/appointments').subscribe((response) => {
      // this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe((response) => {
    console.log(response);
});
    this.today = new Date();

    console.log('today ', this.today);
  }

  
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  slidePrev() {
    this.today - 1;
    console.log('prev Date', this.today)
  }

  async presentActionSheet(event: Event) {
    const actionSheet = await this.actionSheetController.create({

      buttons: [{
        text: 'Mark completed',
        // role: 'destructive',
         cssClass: 'actionButton',

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
      }, {
        text: 'Cancel',
        cssClass: 'cancelButton',

        // role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }],
      
    });

    await actionSheet.present();

  }

  showDatePicker() {
    this.datePicker.show({
      date: this.today,
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
    }).then(
      date => this.today = date,
      err => console.log('Error occurred while getting date: ', err)
    );
  }
  // 
  dateMonth = (date) => this.monthNames[date.getMonth()];
  dateDay = (date) => this.weekdays[date.getDay()];
  addDay = (date) => date = date.setDate(date.getDate() + 1);
  removeDay = (date) => date = date.setDate(date.getDate() - 1);
}
