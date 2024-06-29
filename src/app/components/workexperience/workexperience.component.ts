import { Component } from '@angular/core';

@Component({
  selector: 'app-workexperience',
  templateUrl: './workexperience.component.html',
  styleUrl: './workexperience.component.css'
})
export class WorkexperienceComponent {
  experiences = [
    { logo: 'assets/Acc.jpg', company: 'Accenture', position: 'Application Development Analyst' },
    { logo: 'assets/images.jpg', company: 'Tata Consultancy Services', position: '.Net Developer' }
  ];

}
