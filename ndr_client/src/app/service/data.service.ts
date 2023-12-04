import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, firstValueFrom, of, tap} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {GameFolder} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient);

  private gamesCountUrl = "http://localhost:8080/api/games"

  folders: GameFolder[] =[];

  constructor() { }

    getSubfolders() {
        return this.http.get(this.gamesCountUrl, {responseType: 'json'}).pipe(tap((result) => {
            this.folders = result as GameFolder[];
        }))
    }


}
