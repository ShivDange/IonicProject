export interface appointment {
    id: number;
    patient: Patient;
    appointmentType: string;
    appointmentTime: string;
    appointmentDetail: string;
  }

export interface appointment1 {
    id : number;
    appointmentType : string;
    appointmentTime : Date;
    appointmentImg : string;
    appointmentDetail : string;    
}

export interface Patient {
    id: number;
    patientName: string;
    patientAge: number;
    patientGender: string;
    patientImg: string;
  }
  
