import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
})
export class AchievementsComponent {
  //Property Binding
  achievementName: string = 'Input Achievement';
  achievementDate: string = 'Input Date';

  // Event Binding
  showData($event: any) {
    console.log('Form Submitted!!');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }

  // Event Binding
  clearData($event: any) {
    console.log('Form Cleared!!');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
