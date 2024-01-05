import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../service/data.service";
import {GameFolder} from "../model/model";


@Component({
  selector: 'ndr-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent {

  isGallery: boolean;

  folders: GameFolder[] = [];

  constructor(private router: Router, private dataService: DataService) {
    this.isGallery = true;

    this.dataService.getSubFolders().subscribe((folders) => {
      this.folders = this.dataService.folders;

        console.log(this.folders)
    })
  }

  openGame(game: string){
    game = game.replace(/\s+/g, '');
    this.router.navigate(['/gallery', game]);
  }

    formatString(str: string) {
        // Replace all underscores with spaces
        const withSpaces = str.replace(/_/g, " ");

        // Capitalize first letter of each word
        const capitalized = withSpaces.replace(/(^|\s)[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });

        return capitalized;
    }
}
