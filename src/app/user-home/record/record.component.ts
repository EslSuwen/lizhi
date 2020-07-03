import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from '../../modal/modal.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
  @ViewChild('successModal', {static: true}) successModal: ModalComponent; // 操作成功模态
  @ViewChild('failModal', {static: true}) failModal: ModalComponent; // 操作失败的模态
  @ViewChild('removeModal', {static: true}) removeModal: ModalComponent; // 操作失败的模态
  @ViewChild('updateModal', {static: true}) updateModal: ModalComponent; // 修改的模态


  data: any = [];
  feedback = 0;
  removeNo: number;


  updateModel: any = {
    no: '', campus: '南岸校区', labName: '实验室1', deviceName: '设备2', deviceNum: '4', tutor: '导师3',
    date: '2020-5-25', startTime: '13:00', overTime: '15:00', ps: '这是预约备注。'
  };
  isEdit = false;

  isLabSelected = true;
  isDeviceSelected = true;
  // 实验室
  labList = [];
  labSelected: any;
  labSettings = {};
  // 设备数量
  deviceNumList = [];
  deviceNumSelected: any;
  deviceNumSettings = {};
  // 校区
  campusList = [];
  campusSelected = [{id: '2', itemName: '南岸校区'}];
  campusSettings = {};
  // 设备
  deviceList = [];
  deviceSelected: any;
  deviceSettings = {};
  // 导师
  tutorList = [];
  tutorSelected: any;
  tutorSettings = {};

  psFormControl: FormControl;

  constructor() {
  }

  ngOnInit(): void {
    this.data.push({
      no: '1', campus: '南岸校区', labName: '实验室1', deviceName: '设备5', deviceNum: '1', tutor: '导师1',
      date: '2020-05-21', startTime: '13:00', overTime: '15:00', ps: '这是预约备注。', status: 0
    });
    this.data.push({
      no: '2', campus: '南岸校区', labName: '实验室2', deviceName: '设备6', deviceNum: '3', tutor: '导师2',
      date: '2020-05-22', startTime: '13:00', overTime: '15:00', ps: '这是预约备注。', status: 1
    });
    this.data.push({
      no: '3', campus: '南岸校区', labName: '实验室1', deviceName: '设备2', deviceNum: '4', tutor: '导师3',
      date: '2020-05-25', startTime: '13:00', overTime: '15:00', ps: '这是预约备注。', status: 2
    });
    this.data.push({
      no: '4', campus: '南岸校区', labName: '实验室3', deviceName: '设备1', deviceNum: '2', tutor: '导师4',
      date: '2020-05-23', startTime: '13:00', overTime: '15:00', ps: '这是预约备注。', status: 0
    });
    this.data.push({
      no: '5', campus: '南岸校区', labName: '实验室3', deviceName: '设备2', deviceNum: '4', tutor: '导师5',
      date: '2020-05-26', startTime: '13:00', overTime: '15:00', ps: '这是预约备注。', status: 2
    });

    this.labList = [
      {id: '0', itemName: '未找到实验室'},
      {id: '1', itemName: '实验室1'},
      {id: '2', itemName: '实验室2'},
      {id: '3', itemName: '实验室3'},
      {id: '4', itemName: '实验室4'},
      {id: '5', itemName: '实验室5'},
      {id: '6', itemName: '实验室6'},
      {id: '7', itemName: '实验室7'},
    ];
    this.labSettings = {
      badgeShowLimit: 2,
      singleSelection: true, // 是否单选
      text: '选择实验室',
      enableCheckAll: false, // 是否可以全选
      enableSearchFilter: true, // 查找过滤器
      // showCheckbox: false,
      // enableFilterSelectAll: true, // “全选”复选框可以选择所有过滤结果
      // limitSelection: 5,
      // searchPlaceholderText 搜索的默认文字
    };
    this.deviceList = [
      {id: '0', itemName: '无'},
      {id: '1', itemName: '未找到设备'},
      {id: '2', itemName: '设备2'},
      {id: '3', itemName: '设备3'},
      {id: '4', itemName: '设备4'},
      {id: '5', itemName: '设备5'},
      {id: '6', itemName: '设备6'},
      {id: '7', itemName: '设备7'},
    ];
    this.deviceSettings = {
      badgeShowLimit: 2,
      singleSelection: true, // 是否单选
      text: '选择设备',
      enableCheckAll: false, // 是否可以全选
      enableSearchFilter: true, // 查找过滤器
      // showCheckbox: false,
      // enableFilterSelectAll: true, // “全选”复选框可以选择所有过滤结果
      // limitSelection: 5,
      // searchPlaceholderText 搜索的默认文字
    };
    this.deviceNumList = [
      {id: '1', itemName: '0'},
      {id: '2', itemName: '1'},
      {id: '3', itemName: '2'},
      {id: '4', itemName: '3'},
      {id: '5', itemName: '4'},
      {id: '6', itemName: '5'},
    ];
    this.deviceNumSettings = {
      singleSelection: true, // 是否单选
      text: '选择设备数量',
      enableSearchFilter: false, // 查找过滤器
    };
    this.campusList = [
      {id: '1', itemName: '双福校区'},
      {id: '2', itemName: '南岸校区'},
    ];
    this.campusSettings = {
      singleSelection: true, // 是否单选
      text: '选择校区',
      // enableCheckAll: true, // 是否可以全选
      // selectAllText: '全选',
      // unSelectAllText: '全不选',
      enableSearchFilter: false, // 查找过滤器
      // showCheckbox: false,
      // enableFilterSelectAll: true, // “全选”复选框可以选择所有过滤结果
      // limitSelection: 5,
      // searchPlaceholderText 搜索的默认文字
    };
    this.tutorList = [
      {id: '0', itemName: '导师0'},
      {id: '1', itemName: '导师1'},
      {id: '2', itemName: '导师2'},
      {id: '3', itemName: '导师3'},
      {id: '4', itemName: '导师4'},
      {id: '5', itemName: '导师5'},
    ];
    this.tutorSettings = {
      singleSelection: true, // 是否单选
      text: '选择导师',
      enableSearchFilter: true, // 查找过滤器
    };

  }

  onLabSelected(item: any) {
    if (item.itemName === '未找到实验室') {
      this.isLabSelected = false;
      this.updateModel.labName = '';
    } else {
      this.isLabSelected = true;
      this.updateModel.labName = item.itemName;
    }

  }

  onDeviceSelected(item: any) {
    if (item.itemName === '未找到设备') {
      this.isDeviceSelected = false;
      this.updateModel.deviceName = '';
    } else {
      this.isDeviceSelected = true;
      this.updateModel.deviceName = item.itemName;
    }
  }

  onDeviceNumSelected(item: any) {
    this.updateModel.deviceNum = item.itemName;
  }

  onCampusSelected(item: any) {
    this.updateModel.campus = item.itemName;
  }

  onTutorSelected(item: any) {
    this.updateModel.tutor = item.itemName;
  }

  toRemove(no: number) {
    this.removeNo = no;
    this.removeModal.show();
  }

  remove() {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].no === this.removeNo) {
        this.data.splice(i, 1);
        this.successModal.show();
        return;
      }
    }
  }

  toUpdate(no: number) {

    console.log(no);

    for (const each of this.data) {
      if (each.no === no) {
        this.updateModel.no = each.no;
        this.updateModel.campus = each.campus;
        this.updateModel.labName = each.labName;
        this.updateModel.deviceName = each.deviceName;
        this.updateModel.deviceNum = each.deviceNum;
        this.updateModel.date = each.date;
        this.updateModel.tutor = each.tutor;
        this.updateModel.startTime = each.startTime;
        this.updateModel.overTime = each.overTime;
        this.updateModel.status = each.status;
        this.updateModel.ps = each.ps;
        break;
      }
    }

    console.log(this.updateModel);

    for (const each of this.campusList) {
      if (each.itemName === this.updateModel.campus) {
        this.campusSelected = [{id: each.id, itemName: each.itemName}];
      }
    }
    for (const each of this.labList) {
      if (each.itemName === this.updateModel.labName) {
        this.labSelected = [{id: each.id, itemName: each.itemName}];
      }
    }
    for (const each of this.deviceList) {
      if (each.itemName === this.updateModel.deviceName) {
        this.deviceSelected = [{id: each.id, itemName: each.itemName}];
      }
    }
    for (const each of this.deviceNumList) {
      if (each.itemName === this.updateModel.deviceNum) {
        this.deviceNumSelected = [{id: each.id, itemName: each.itemName}];
      }
    }
    for (const each of this.tutorList) {
      if (each.itemName === this.updateModel.tutor) {
        this.tutorSelected = [{id: each.id, itemName: each.itemName}];
      }
    }
    this.updateModal.show();
  }

  update() {
    this.isEdit = false;
    this.successModal.show();
  }

  onEdit() {
    this.isEdit = true;
  }

}
