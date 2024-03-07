import { Component, OnInit } from '@angular/core';
import { project } from '../models/models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: project[] = [
    {
      title: "Grievance Guardian ",
      technologies: "Django, Angular 11",
      description:[
        "Developed a web application using Django and Angular, enhancing grievance handling in educational institutions, cutting resolution times by 25%.",
        "It features a real-time tracking dashboard and a customizable workflow engine for tailored grievance management."
      ]
    },
    {
      title: "3D Tic-Tac-Toe",
      technologies: "Java Swing",
      description:[
        "Implemented a 3D Tic-Tac-Toe, transitioning the classic game to a 3D grid, resulting in a 40% increase in game complexity and strategic depth.",
        "Integrated an AI opponent using a MiniMax algorithm with alpha beta pruning to enhance efficiency."
      ]
    },
    {
      title: "Sports Equipment Trading Website",
      technologies: "MERN Stack",
      description:[
        "Designed a Trading Webapp using MERN offering seamless trading experiences for games and sports items.",
        "Integrated Elasticsearch improving search result accuracy by over 20% enabling relevant results for user queries."
      ]
    },
    {
      title: "Health Care Management",
      technologies: "MySQL, Python",
      description:[
        "The API allowed developers to access database functionalities through stored procedures, eliminating the need for writing SQL statements.",
        " Implemented user authentication and role-based access control to ensure authorized access to the database."
      ]
    },
    {
      title: "Geo Health Visualization",
      technologies: "HTML, SVG, D3JS",
      description:[
        "An interactive geospatial visualization tool designed for the analysis and presentation of global health data.",
        "It uses D3.js library for creating dynamic and interactive data visualizations in web browsers, HTML and SVG for structuring and displaying the visual content on web pages.", 
        "It also uses external data sources such as GeoJSON and CSV files for mapping and population data, respectively."
      ]
    },
    {
      title: "Sentiment Analysis",
      technologies: "Python, NLP, Machine Learning, and Neural Networks.",
      description:[
        "Implemented a sequential neural network using Python, Twitter API, and NLP tools to conduct sentiment analysis on 1500+ unique tweets collected from Twitter",
        "Achieved an 86% accuracy rate through training"
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
