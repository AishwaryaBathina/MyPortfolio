import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][]=[
    ['Name', 'Aishwarya Bathina'],
    ['Experience', '3.8 Years'],
    ['Education', 'MS(2024)']
  ];

  aboutmySelf: string[] = [
    'Hi, I am a Full stack developer with 3.8 years of experience. Proficient in MongoDB, Express.js, Angular, React and Node.js, I have successfully delivered end-to-end solutions, utilizing these technologies.',
    ' My experience extends across the entire development process – from planning and design to implementation and deployment.',
    "In my Master's program, I acquired in-depth knowledge of data structures with valuable insights into data analysis, and statistical modeling"
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
