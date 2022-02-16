import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  formArray: Array<{ name: string, surName: string, email: string }> = [];

  onSubmit(form: NgForm) {
    this.formArray.push(form.value);
    this.shared.setMessage(this.formArray);
    this.route.navigate(['dashboard'])
  }

  constructor(private shared: SharedService, private route: Router) { }

  ngOnInit(): void {

  }



}
