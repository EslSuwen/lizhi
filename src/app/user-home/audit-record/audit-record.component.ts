import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from '../../modal/modal.component';

@Component({
  selector: 'app-audit-record',
  templateUrl: './audit-record.component.html',
  styleUrls: ['./audit-record.component.scss']
})
export class AuditRecordComponent implements OnInit {
  @ViewChild('successModal', {static: true}) successModal: ModalComponent; // 操作成功模态
  @ViewChild('failModal', {static: true}) failModal: ModalComponent; // 操作失败的模态
  @ViewChild('confirmModal', {static: true}) confirmModal: ModalComponent; // 操作确认的模态
  @ViewChild('recordModal', {static: true}) recordModal: ModalComponent; // 审核操作的模态

  recordData: any = [];
  recordModel: any = {
    no: '', applyName: '', campus: '', labName: '', deviceName: '', deviceNum: '', tutor: '',
    date: '', startTime: '', overTime: '', ps: '', status: 2
  };
  feedback = 2;

  constructor() {
  }

  ngOnInit(): void {
    this.recordData.push({
      no: '1', applyName: '张静怡', campus: '南岸校区', labName: '实验室1', deviceName: '设备1', deviceNum: '1', tutor: '导师1',
      date: '2020-05-21', startTime: '13:00', overTime: '15:00', ps: '这是预约备注。', status: 0
    });
    this.recordData.push({
      no: '2', applyName: '李想', campus: '南岸校区', labName: '实验室2', deviceName: '无', deviceNum: '0', tutor: '导师0',
      date: '2020-05-22', startTime: '13:00', overTime: '15:00', ps: '这是预约备注。', status: 1
    });
    this.recordData.push({
      no: '3', applyName: '王峥', campus: '南岸校区', labName: '实验室3', deviceName: '设备2', deviceNum: '1', tutor: '导师1',
      date: '2020-05-23', startTime: '13:00', overTime: '15:00', ps: '这是预约备注。', status: 0
    });
    this.recordData.push({
      no: '4', applyName: '谢凯', campus: '南岸校区', labName: '实验室4', deviceName: '设备3', deviceNum: '2', tutor: '导师2',
      date: '2020-05-24', startTime: '13:00', overTime: '15:00', ps: '这是预约备注。', status: 1
    });
    this.recordData.push({
      no: '5', applyName: '张琪', campus: '南岸校区', labName: '实验室5', deviceName: '设备4', deviceNum: '4', tutor: '导师4',
      date: '2020-05-25', startTime: '13:00', overTime: '15:00', ps: '这是预约备注。', status: 0
    });
  }

  toRecord(no: number) {
    for (const each of this.recordData) {
      if (each.no === no) {
        this.recordModel = each;
        break;
      }
    }
    this.recordModal.show();
  }

  record() {
    this.successModal.show();
  }

  remove() {
    for (let i = 0; i < this.recordData.length; i++) {
      if (this.recordData[i].no === this.recordModel.no) {
        this.recordData.splice(i, 1);
        this.successModal.show();
        return;
      }
    }
  }

}
