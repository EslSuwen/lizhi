import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  @ViewChild('vFrame', {static: true}) vFrame: ModalComponent;


  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    setTimeout(() => this.vFrame.show(), 1500);
  }

  showVideo() {
    this.vFrame.show();
  }

}
