import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  // public variables
  // string interpolation related
  appName = 'User Management App';
  totalTeamMembers = 20;
  buttonLabel = 'Click Me'

  // prop binding related
  companyName = 'SOTI';

  // two way binding related
  courseName = 'Angular';

  personAge = 100;

  dataReceivedFromChildComp = ''; 

  // for directives
  isLoggedIn = true;
  skillList = ['html', 'css', 'ts', 'ng'];

  constructor() { }

  ngOnInit(): void {
  }

  // custom methods should come here
  handleClickMe(event: any):void {
    console.log(event);
    this.buttonLabel = "Clicked";
    event.target.disabled = "True";
  }

  // custom event releated 
  // Step 6 of CEB: handle the custom event
  handleProfileLoaded(event: any){
    console.log('Inside handleProfileLoaded');
    console.log(event);
    this.dataReceivedFromChildComp = event.firstName;
  }
}