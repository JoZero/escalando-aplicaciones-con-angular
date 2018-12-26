import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
<<<<<<< HEAD
=======

import { CoreModule } from 'src/app/modules';
>>>>>>> 5ba5b19c2fc214f98972e56b2a87d03987a362e5

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
<<<<<<< HEAD
    MatButtonModule
=======
    MatButtonModule,
    CoreModule
>>>>>>> 5ba5b19c2fc214f98972e56b2a87d03987a362e5
  ]
})
export class RegisterModule { }
