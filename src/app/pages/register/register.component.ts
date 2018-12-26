import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
<<<<<<< HEAD
import { Validators } from 'src/app/modules';
=======
import { Validators } from 'src/app/modules/core';
>>>>>>> 5ba5b19c2fc214f98972e56b2a87d03987a362e5
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
<<<<<<< HEAD
  form = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    email: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  isLoading = false;
  constructor(private registerService: RegisterService) { }
=======
  isLoading = false;

  form = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(
    private registerService: RegisterService
  ) { }
>>>>>>> 5ba5b19c2fc214f98972e56b2a87d03987a362e5

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.isLoading = true;
<<<<<<< HEAD
      // alert(JSON.stringify(this.form.value));
=======
>>>>>>> 5ba5b19c2fc214f98972e56b2a87d03987a362e5
      this.registerService
        .register(this.form.value)
        .subscribe(() => {
          this.isLoading = false;
        }, (reason) => {
          this.isLoading = false;
          alert(JSON.stringify(reason));
        });
    }
  }
}
