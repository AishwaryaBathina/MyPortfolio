import { Component, OnInit } from '@angular/core';
import { workExperience } from '../models/models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {


  experience : workExperience[] = [
    {
      designation: 'Specialist Programmer',
      organization: "Infosys",
      duration: 'Jul 2021 - Dec 2022',
      technology:"MongoDB, Express.js, Node.js, Angular 2 and above, React, Docker, OpenShift, REST API, Oracle SQL",
      description: [
        "As a lead developer, responsible for spearheading the development of multiple web applications using MEAN/MERN stack.",
        "Played a pivotal role in optimizing data retrieval speed by implementing caching, load balancing, and real-time data retrieval techniques.",
        "Led a team using Agile methodologies, guiding sprint planning, task tracking, retrospectives via JIRA and Confluence, ensuring robust version control with Git."
      ]
    },
    {
      designation: 'System Engineer Specialist',
      organization: "Infosys",
      duration: 'May 2019 - Jul 2021',
      technology:"MongoDB, Express.js, Node.js, Angular 2 and above, React, Docker, OpenShift, REST API, Oracle SQL",
      description: [
        "Led the end-to-end development of a centralized application facilitating teams in creating and managing workflow processes using the MERN Stack. ",
        "Ensured seamless alignment with product requirements and stakeholder expectations by designing and building components in line with the project's overall design.",
        "Achieved 85% code coverage through the implementation of Karma and Jasmine with Angular, emphasizing comprehensive unit testing for code quality and application reliability."
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.getWorkExperience()
  }

  private getWorkExperience() {
  }

}
