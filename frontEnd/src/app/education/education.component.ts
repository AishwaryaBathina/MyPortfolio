import { Component, OnInit } from '@angular/core';
import {Education} from '../models/models'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  listOfSchools: Education[] = [
    {
      university:'University of North Carolina at Charlotte',
      course: 'Masters',
      duration: '2023-2024',
      gpa:'4/4'
    },
    {
      university:'Sree Vidyanikethan Engineering College',
      course: 'Bachelors',
      duration: '2015-2019',
      gpa:'9.01/10'
    },
    {
      university:'Dr. SRK EM School',
      course: 'SSC',
      duration: '2008-2013',
      gpa:'9.5/10'
    }
  ]
  public getJsonValue: any;
  constructor() { }

  ngOnInit(): void {
  }
  
}
