import { Component, OnInit } from '@angular/core';
import { ResumeFormModal } from '../Model/ResumeFormModal';

@Component({
  selector: 'app-resume-preview',
  templateUrl: './resume-preview.component.html',
  styleUrls: ['./resume-preview.component.css']
})
export class ResumePreviewComponent implements OnInit {

  FormData: ResumeFormModal;
  
  
  constructor() {
    let data = (localStorage.getItem("FormData") ? localStorage.getItem("FormData") : "{}") as string;

    this.FormData = JSON.parse(data);
   }

  ngOnInit(): void {
  }

}
