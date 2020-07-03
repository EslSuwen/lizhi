import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from '../../modal/modal.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @ViewChild('successModal', {static: true}) successModal: ModalComponent; // 修改成功模态
  @ViewChild('failModal', {static: true}) failModal: ModalComponent; // 修改失败的模态
  user: any;
  feedback = 0;
  isEdited = false;

  constructor() {
  }

  ngOnInit(): void {
    this.user = {uid: '123', uname: 'name', uphone: '12345678', uemail: 'test@test.com', ulimit: '管理员'};
  }

  updateUserInfo() {

    this.successModal.show();
    // this.failModal.show();
  }

  successUpdate() {

  }

  onEdit() {
    this.isEdited = true;
  }
}
