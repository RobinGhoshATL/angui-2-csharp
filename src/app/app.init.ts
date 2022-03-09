import { Injectable } from '@angular/core';;
import { from } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
declare var window: any;
import {fetch} from 'whatwg-fetch';


@Injectable()
export class AppInitService {

  // This is the method you want to call at bootstrap
  // Important: It should return a Promise
  public init() {
    return from(
        fetch('assets/app-config.json').then(function(response) {      
          return response.json();
        })
      ).pipe(
        map((config) => {

          if (config['environment'].toLowerCase().trim() == "local"){
                // local
               // config['base_href'] = "http://localhost:44329/"; 
                //azure
            config['base_href'] = "https://csharp-be.azurewebsites.net/"; 
          }
        config['graph_url'] = "https://graph.microsoft.com/beta/";
        config['staticData'] = false;
        window.config = config;
        return 
      })).toPromise();
  }
}