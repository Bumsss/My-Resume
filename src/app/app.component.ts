import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My-Resume';

  //Interpolation
  myName = 'Allen Bumanlag';
  noName = 'AllenBumanlag';
  myEmail = 'afbumanlag@student.hau.edu.ph';

  //Style Bind
  mainColor = '#6200be';
}
