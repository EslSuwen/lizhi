import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from '../../modal/modal.component';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {

  @ViewChild('successModal', {static: true}) successModal: ModalComponent; // 修改成功模态
  @ViewChild('failModal', {static: true}) failModal: ModalComponent; // 修改失败的模态
  oldPw = '';
  newPw = '';
  newPw1: '';
  feedback = 2;

  constructor(private authenticationService: AuthenticationService,
              public router: Router,
  ) {
  }

  ngOnInit() {

  }

  // 判断更改的两次密码是否相同
  isSamePwd() {
    console.log(this.newPw === this.newPw1);
    console.log(this.newPw + this.newPw1);
    return this.newPw === this.newPw1;
  }

  updatePassword() {
    if (!this.isSamePwd) {
      /*      if (this.newPw !== this.newPw1) {
              alert('两次输入的密码不相同');*/
    } else {
      /*this.teacherService.updatePassword(this.authenticationService.getUserNo(), this.oldPw, this.newPw).subscribe(code => {
        switch (code) {
          case 1:  //修改成功
          {
            this.case1 = 1;
            this.showAndHideModal_success();
            this.createBasicNotification();
          }
            break;
          case -1: {
            this.case1 = -1;
            //原密码输入错误
            this.showAndHideModa_fail();

            break;
          }
          case 0: {
            this.case1 = 0; // 修改失败
            console.log('修改失败！');
            this.showAndHideModa_fail();
            break;
          }
          default: {
            this.case1 = 2;
            //意料之外的错误
            this.showAndHideModa_fail();
          }
        }
      });
    */
      if (this.newPw.length > 3) {
        this.showAndHideModal_success();
      } else {
        this.showAndHideModal_fail();
      }
    }
  }

  showAndHideModal_success() {   // 显示修改成功的模态
    this.successModal.show();
  }

  showAndHideModal_fail() {   // 登录修改显示的模态
    this.failModal.show();
  }


  successUpdate() {  // 输入正确，确认进入
    this.router.navigate(['login']);
  }

}
