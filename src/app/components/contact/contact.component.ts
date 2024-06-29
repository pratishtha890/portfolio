import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // Implement contact form submission logic here
    alert('Your message has been sent successfully!');
   this.contact = {
      name: '',
      email: '',
      message: ''
    };
  
    console.log('Contact form submitted:', this.contact);
  }
}
