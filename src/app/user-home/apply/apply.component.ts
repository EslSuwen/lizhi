import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ModalComponent} from '../../modal/modal.component';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  @ViewChild('frame', {static: true}) frame: ModalComponent;
  @ViewChild('successModal', {static: true}) successModal: ModalComponent; // 预约成功模态
  @ViewChild('failModal', {static: true}) failModal: ModalComponent; // 预约失败的模态

  applyModel: any = {
    no: '', campus: '', labName: '', deviceName: '', deviceNum: '', tutor: '',
    date: '', startTime: '', overTime: '', ps: '', status: 2
  };

  isLabSelected = true;
  isDeviceSelected = true;

  // status: number;
  status = 0;
  feedback = 2;

  // 实验室
  labList = [];
  labSelected: string;
  labSettings = {};
  // 设备数量
  deviceNumList = [];
  deviceNumSelected: string;
  deviceNumSettings = {};
  // 校区
  campusList = [];
  campusSelected = [];
  campusSettings = {};
  // 设备
  deviceList = [];
  deviceSelected: string;
  deviceSettings = {};
  // 导师
  tutorList = [];
  tutorSelected: string;
  tutorSettings = {};

  psFormControl: FormControl;

  constructor() {
  }

  ngOnInit(): void {

    this.psFormControl = new FormControl();


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

    const date = new Date();

    this.frame.show();
  }

  onLabSelected(item: any) {
    if (item.itemName === '未找到实验室') {
      this.isLabSelected = false;
      this.applyModel.labName = '';
    } else {
      this.isLabSelected = true;
      this.applyModel.labName = item.itemName;
    }

  }

  onDeviceSelected(item: any) {
    if (item.itemName === '未找到设备') {
      this.isDeviceSelected = false;
      this.applyModel.deviceName = '';
    } else {
      this.isDeviceSelected = true;
      this.applyModel.deviceName = item.itemName;
    }
  }

  onDeviceNumSelected(item: any) {
    this.applyModel.deviceNum = item.itemName;
  }

  onCampusSelected(item: any) {
    this.applyModel.campus = item.itemName;
  }

  onTutorSelected(item: any) {
    this.applyModel.tutor = item.itemName;
  }

  submit() {
    console.log(this.applyModel);
    this.successModal.show();
  }

}
