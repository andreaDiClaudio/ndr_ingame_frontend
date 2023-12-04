import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'ndr-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements  AfterViewInit {

  isGallery: boolean = false;

  @ViewChild('about') aboutComponent: ElementRef | undefined;

  constructor(private route:ActivatedRoute, private router: Router, private location: Location) {
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      // Check if the path has the fragment (f.e. #about)
      if (fragment) {
        // and if the path includes an #, it scrolls to the about sections and then cleans the path
        if(this.router.url.includes('#')){
          this.scrollToAbout()
          let pathWithoutHash = this.location.path().split('#')[0];
          this.router.navigateByUrl(pathWithoutHash);
        }
      }
    });
  }

  //Scrolls to the about sections
  scrollToAbout(): void {
    setTimeout(() => {
      console.log("called")
      this.aboutComponent?.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 1)
  }

  // listen to the emit of the child and calls the scroll function
  onNavbarButtonClick() {
    this.scrollToAbout();
  }
}
