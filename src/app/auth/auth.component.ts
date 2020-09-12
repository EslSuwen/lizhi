import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from '../modal/modal.component';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  @ViewChild('authFrame', {static: true}) authFrame: ModalComponent;
  @ViewChild('failFrame', {static: true}) failFrame: ModalComponent;
  @ViewChild('passFrame', {static: true}) passFrame: ModalComponent;


  numFC: FormControl;
  numModel: number;

  constructor(public router: Router) {
  }

  ngOnInit(): void {
    this.numFC = new FormControl('numFC',
      [Validators.required, Validators.min(0), Validators.max(100)]);
    setTimeout(() => this.authFrame.show(), 300);
  }

  showAuth() {
    this.authFrame.show();
  }

  validateNum() {
    if (this.numModel == 8296) {
      this.authFrame.hide();
      this.passFrame.show();
    } else {
      this.authFrame.hide();
      this.failFrame.show();
    }
  }

}
