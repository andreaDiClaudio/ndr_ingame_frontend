import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {GameFolder} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient);

  //private gamesCountUrl = "https://ndr-ingame-backend.vercel.app/api/games"
  private gamesCountUrl = "http://localhost:8080/api/games"

  folders: GameFolder[] =[];

  constructor() { }

    getSubFolders() {
        return this.http.get(this.gamesCountUrl, {responseType: 'json'}).pipe(tap((result) => {
            this.folders = result as GameFolder[];
        }))
    }


}
