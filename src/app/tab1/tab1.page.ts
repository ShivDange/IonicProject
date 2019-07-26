import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { HttpClient } from '@angular/common/http';
import { appointment, appointment1 } from '../models';
import { Subscription, from } from 'rxjs';
import { RemoteServiceService } from '../remote-service.service'
import { map } from 'rxjs/operators';







@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers : [RemoteServiceService]
})
export class Tab1Page implements OnInit  {
  ngOnInit(){
      
  }

  today;
  newDate;
  monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  appointments : appointment[] = [];
  appointmentsSubscription : Subscription;
  constructor(public actionSheetController: ActionSheetController, private menu: MenuController, private datePicker: DatePicker,
     private http: HttpClient, private appointmentService : RemoteServiceService
      )
      { 
        this.today = new Date();
        console.log('today ', this.today);
        this.fetchAppointment();
        console.log(this.appointments)
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

fetchAppointment(){
  this.appointmentsSubscription = this.appointmentService.getAppointment().subscribe(appointments =>
    { this.appointments = appointments
    console.log(this.appointments[0].patient.patientName)
    });
}
}
