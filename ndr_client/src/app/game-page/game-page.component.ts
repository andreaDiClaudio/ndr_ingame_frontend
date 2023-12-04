import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ndr-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit{

  isGallery: boolean = true;

  images: string[] = [];

  constructor(private route: ActivatedRoute) {
    for(let i= 1; i<=14; i++){
      this.images.push(`./assets/images/gallery/Stray/Stray${i}.jpg`);
    }
  }

  game: string | null = "";

  //00001Stray
  ngOnInit() {
    this.game = this.route.snapshot.paramMap.get('game');
  }
}
