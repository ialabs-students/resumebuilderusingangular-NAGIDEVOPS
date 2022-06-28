import { ResumeFormModal } from './../Model/ResumeFormModal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-fill',
  templateUrl: './form-fill.component.html',
  styleUrls: ['./form-fill.component.css']
})
export class FormFillComponent implements OnInit {

  FormData : ResumeFormModal;
  showresume: boolean= false;

  constructor() { 
    this.FormData = {
      FirstName: "",
      LastName: "",
      email: "",
      mobile: "",
      dob:"" ,
      gender: "",
      university1: "" ,
      yearofpassing1: "",
      percentage1: "",
      university2: "" ,
      yearofpassing2: "",
      percentage2: "",
      university3: "" ,
      yearofpassing3: "",
      percentage3: "",
      university4: "" ,
      yearofpassing4: "",
      percentage4: "",
      organization1: "",
      doj1: "",
      dor1: "",
      organization2: "",
      doj2: "",
      dor2: "",
      tech1: "",
      version1: "",
      lastworkedon1: "",
      rate1:"",
      tech2: "",
      version2: "",
      lastworkedon2: "",
      rate2:"",
      Objective: "",
      description: "",
      



    }
  }

  ngOnInit(): void {
      

  }


  handelOnSubmitEvent() {
    // console.log(this.formData);
    localStorage.setItem("FormData", JSON.stringify(this.FormData));
    this.showresume = true;
  }

}
