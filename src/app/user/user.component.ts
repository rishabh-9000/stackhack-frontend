import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { UserService } from './user.service';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  detailsFormGroup: FormGroup;
  imageForm = new FormControl(null, [Validators.required]);
  imagePath: string;
  registrationTypes = [
    { key: 'Self', value: 'self' },
    { key: 'Corporate', value: 'Corporate' },
    { key: 'Group', value: 'group' },
    { key: 'Other', value: 'other' },
  ];
  ticketCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

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
      imageInfo: new FormControl(),
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

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e) => (this.imagePath = reader.result as string);
      reader.readAsDataURL(file);

      this.imageForm.setValue(file);
    }
  }

  clearFile() {
    this.imageForm.setValue('');
    this.fileInput.nativeElement.value = '';
  }

  onSubmit() {
    const imagePayload = new FormData();
    imagePayload.append('image', this.imageForm.value);

    this.userService
      .uploadImage(imagePayload)
      .pipe(
        map((imageInfo) => {
          this.detailsFormGroup.get('imageInfo').setValue(imageInfo);
        }),
        mergeMap(() => this.userService.register(this.detailsFormGroup.value))
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
