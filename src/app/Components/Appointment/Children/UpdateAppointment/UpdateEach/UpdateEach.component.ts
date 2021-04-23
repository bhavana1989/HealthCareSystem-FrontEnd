import { Component, Input, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Interfaces/Appointment';
import { AppointmentStatus } from 'src/app/Interfaces/AppointmentStatus.enum';
import { AppointmentService } from 'src/app/Services/Appointment.service';

@Component({
  selector: 'app-UpdateEach',
  templateUrl: './UpdateEach.component.html',
  styleUrls: ['./UpdateEach.component.css'],
})
export class UpdateEachComponent implements OnInit {
  @Input('appointment') appointment!: Appointment;
  hasAppointments = false;
  appstat!: AppointmentStatus;
  search: any;
  addTest = false;
  constructor(private appServ: AppointmentService) {}

  ngOnInit() {}

  addTestResult() {
    this.addTest = !this.addTest;
  }

  testResAdded(event: any) {
    this.appointment.testResult.push(event);
  }
}
