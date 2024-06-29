import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects = [
    { title: 'Renters Ease', techStack: 'Angular,HTML,CSS,Bootstrap,Firebase, AWS SES, Angular Firestore.', 
      description: 'RenterEase is an innovative online rental property management platform designed to streamline the management of rental properties. Leveraging the power of Angular for a dynamic and responsive frontend, Firebase for real-time data handling and backend services, and AWS SES for robust email communication, RenterEase offers a comprehensive solution for property managers and landlords to efficiently manage their properties and engage with tenants.', githubLink: 'https://github.com/pratishtha890/Renters-Ease',domain:'https://www.renterease.com' },
    { title: 'StepUp Ecommerce', techStack: 'Angular,HTML,CSS,Bootstrap,Typescript', description: 'modern, responsive web application designed to provide a seamless online shopping experience for shoe enthusiasts. Built using Angular for a robust and scalable frontend, TypeScript for type safety and better code maintainability, and HTML and CSS for a visually appealing and user-friendly interface, this platform offers a comprehensive solution for both customers and administrators.', githubLink: 'https://github.com/pratishtha890/swe632_Assignment3',domain:'https://pratishtha890.github.io/swe632_Assignment3' },
    { title: 'Password Manager', techStack: 'Python ,flask', description: 'The Password Manager App is a secure and efficient solution designed to manage and store your passwords safely. Built using Python and Flask, this application leverages custom hashing algorithms to ensure the highest level of security for stored passwords.', githubLink: 'https://github.com/pratishtha890/PasswordManagerV1' }
  ];

  constructor() { }

  ngOnInit(): void { }
}
