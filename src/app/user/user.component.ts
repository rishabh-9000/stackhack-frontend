import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  detailsFormGroup: FormGroup;
  registrationTypes = [
    { key: 'Self', value: 'self' },
    { key: 'Corporate', value: 'Corporate' },
    { key: 'Group', value: 'group' },
    { key: 'Other', value: 'other' },
  ];
  ticketCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.detailsFormGroup = this.formBuilder.group({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(10),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      registrationType: new FormControl('', [Validators.required]),
      numberOfTickets: new FormControl('', [Validators.required]),
    });
  }

  print() {
    console.log(this.detailsFormGroup);
  }

  onChange() {
    const regType = this.detailsFormGroup.get('registrationType').value;

    if (regType === 'self') {
      this.detailsFormGroup.patchValue({ numberOfTickets: 1 });
    }
  }
}
