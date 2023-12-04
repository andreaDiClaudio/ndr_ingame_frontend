import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ndr-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() isGallery: boolean = false;


  //Creates the event to emit the trigger to the parent
  @Output() scrollAbout = new EventEmitter();

  //Attached to the html button
  aboutClick() {
    this.scrollAbout.emit();
  }
}
