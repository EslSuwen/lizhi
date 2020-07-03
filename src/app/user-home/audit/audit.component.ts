import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from '../../modal/modal.component';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {
  @ViewChild('successModal', {static: true}) successModal: ModalComponent; // 操作成功模态
  @ViewChild('failModal', {static: true}) failModal: ModalComponent; // 操作失败的模态
  @ViewChild('confirmModal', {static: true}) confirmModal: ModalComponent; // 操作确认的模态
  @ViewChild('auditModal', {static: true}) auditModal: ModalComponent; // 审核操作的模态
  auditData: any = [];
  auditModel: any = {
    no: '', applyName: '', campus: '', labName: '', deviceName: '', deviceNum: '', tutor: '',
    date: '', startTime: '', overTime: '', ps: '', status: 2
  };
  feedback = 2;

  constructor() {
  }

  ngOnInit(): void {
    this.auditData.push({
      no: '1', applyName: '张静怡', campus: '南岸校区', labName: '实验室1', deviceName: '设备1', deviceNum: '1', tutor: '导师1',
      date: '2020-05-21', startTime: '13:00', overTime: '15:00', ps: '这是预约备注。', status: 0
    });
    this.auditData.push({
      no: '2', applyName: '李想', campus: '南岸校区', labName: '实验室2', deviceName: '无', deviceNum: '0', tutor: '导师0',
      date: '2020-05-22', startTime: '13:00', overTime: '15:00', ps: '这是预约备注。', status: 0
    });
    this.auditData.push({
      no: '3', applyName: '王峥', campus: '南岸校区', labName: '实验室3', deviceName: '设备2', deviceNum: '1', tutor: '导师1',
      date: '2020-05-23', startTime: '13:00', overTime: '15:00', ps: '这是预约备注。', status: 0
    });
    this.auditData.push({
      no: '4', applyName: '谢凯', campus: '南岸校区', labName: '实验室4', deviceName: '设备3', deviceNum: '2', tutor: '导师2',
      date: '2020-05-24', startTime: '13:00', overTime: '15:00', ps: '这是预约备注。', status: 0
    });
    this.auditData.push({
      no: '5', applyName: '张琪', campus: '南岸校区', labName: '实验室5', deviceName: '设备4', deviceNum: '4', tutor: '导师4',
      date: '2020-05-25', startTime: '13:00', overTime: '15:00', ps: '这是预约备注。', status: 0
    });
  }

  audit(no: number) {
    for (const each of this.auditData) {
      if (each.no === no) {
        this.auditModel = each;
        break;
      }
    }
    this.auditModal.show();
  }

  passAudit() {
    this.successModal.show();
  }

  failAudit() {
    this.successModal.show();

  }
}
