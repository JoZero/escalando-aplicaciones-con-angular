import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { LoginService } from './login.service';
import { LoginFormModel } from './login-form.model';
import { FilterActivesPipe } from '../core/filter-actives.pipe';
<<<<<<< HEAD
// import { GroupService } from './group.service';
=======
import { Group } from '../core/models/group-interface';
>>>>>>> 5ba5b19c2fc214f98972e56b2a87d03987a362e5

interface JSONResponse {
  groups: Group[];
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;

  formModel: LoginFormModel;
  isLoading: boolean;
  groups = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private loginService: LoginService,
<<<<<<< HEAD
    // private groupService: GroupService
    private filterActives: FilterActivesPipe,
=======
    private filterActives: FilterActivesPipe
>>>>>>> 5ba5b19c2fc214f98972e56b2a87d03987a362e5
  ) {
    this.formModel = new LoginFormModel({
      email: this.route.snapshot.queryParams.email,
      group: '',
      rememberMe: true,
    });
  }

  ngOnInit() {
    this.route.data
<<<<<<< HEAD
      .subscribe((data: {groups: []}) => {
        this.groups = this.filterActives
        .transform(data.groups);
      });
    // this.groupService
    //    .getGroups()
    //    .then((response: any) => {
    //      this.groups = response.list;
    //    });
=======
      .subscribe((data: { groups: [] }) => {
        this.groups = this.filterActives.transform(data.groups);
      });
>>>>>>> 5ba5b19c2fc214f98972e56b2a87d03987a362e5
  }
  submit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.loginService
        .authenticate(this.formModel.email, this.formModel.password)
        .pipe(
           finalize(() => this.isLoading = false),
         )
         .subscribe(_ => {
           this.router.navigateByUrl(this.loginService.fallbackUrl);
         }, errorResponse => {
           this.snackBar.open(errorResponse.error.message, null, { duration: 5000 });
         });
    }
  }
}
