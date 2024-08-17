import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  title: string = 'About Me';
  introduction: string = ' A creative and results-driven web developer with a knack for crafting seamless user experiences and robust backend systems.';
  profileImage: string = 'assets/web.jpg';
  bio: string = 'I have experience in Angular, TypeScript, JavaScript, and .NET. I am passionate about creating dynamic and responsive web applications, and I continuously strive to improve my skills and learn new technologies.';
  skillsExpanded: boolean = false;
  skills: { name: string, items: { name: string, level: number }[] }[] = [
    { 
      name: 'Languages', 
      items: [
        { name: 'TypeScript', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'NodeJS', level: 75 },
        { name: 'HTML', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'C#', level: 75 },
        { name: 'Python', level: 60 },

      ] 
    },
    { 
      name: 'Frameworks', 
      items: [
        { name: 'Angular', level: 85 },
        { name: '.NET', level: 70 },
        { name: 'Flask', level: 65 }
      ] 
    },
    { 
      name: 'Other Tools', 
      items: [
        { name: 'Git', level: 80 },
        { name: 'GitHub', level: 75 },
        { name: 'Azure DevOps', level: 75 },
        { name: 'AWS', level: 65 },
        { name: 'Firebase', level: 75 },

        
      ] 
    }
  ];
  expanded: boolean = false;
  
  constructor() { }

  ngOnInit(): void { }

  toggleSkills() {
    this.skillsExpanded = !this.skillsExpanded;
  }

  

}
