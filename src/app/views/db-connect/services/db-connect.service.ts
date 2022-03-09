import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthService } from './../../../shared/services/auth/auth.service';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DbConnectService {
  base_href=environment.base_href+"api/";
  get_db_connection_list = "DataBaseConnection/getProductListing";

  constructor(
    private http: HttpClient,
  ) { }

  DBConnection():Observable<any>{
    return this.http.get<any>(`${this.base_href}${this.get_db_connection_list}`);
  }
}
