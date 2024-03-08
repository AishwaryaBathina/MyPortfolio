import { Component, OnInit } from '@angular/core';
import { skills } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill: skills[] = [{
    "name": "Angular"
  },{
    "name": "React"
  },{
    "name": "MongoDB"
  },{
    "name": "Node.js"
  },{
    "name": "Express.js"
  },{
    "name": "Javascript"
  },{
    "name": "Typescript"
  },{
    "name": "Java"
  },{
    "name": "Python"
  },{
    "name": "C"
  },{
    "name": "Docker basics"
  },{
    "name": "MySQL"
  },{
    "name": "Jenkins"
  },{
    "name": "OpenShift"
  },{
    "name": "Postman"
  },{
    "name": "GraphQL"
  }];
  
  skillsPerColumn = Math.ceil(this.skill.length / 2);
  skillsGrouped: skills[][] = [];

  constructor() {
    // Group the skills into two columns
    this.skillsGrouped = [
      this.skill.slice(0, this.skillsPerColumn),
      this.skill.slice(this.skillsPerColumn)
    ];
  }

  ngOnInit(): void {
  }
}
