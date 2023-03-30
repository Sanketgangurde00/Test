import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userForm: FormGroup;
  listData: any;
  userFrom: any;

  constructor(private fb: FormBuilder) {

    this.listData = [];

    this.userForm = this.fb.group

      ({
        GSTNo: ['', Validators.required],
        PANNo: ['', Validators.required],
        Code: ['', Validators.required],
        Name: ['', Validators.required],
        Address: ['', Validators.required],
        Pincode: ['', Validators.required],
        Country: ['', Validators.required],
        State: ['', Validators.required],
        City: ['', Validators.required],
        Mobile: ['', Validators.required],
        Email: ['', Validators.required],
        Latitude: ['', Validators.required],
        Longitude: ['', Validators.required],
        Currancy: ['', Validators.required],

      });
  }

  public addItem(): void {
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }


  reset() {
    this.userForm.reset();
  }

  removeItem(element: any) {
    this.listData.forEach((value: any, index: any) => {
      if (value == element)
        this.listData.splice(index, 1);
    });
  }


  ngOnInit(): void {
    this.listData.push(this.userFrom?.value);
    this.userFrom?.reset();
  }






}
