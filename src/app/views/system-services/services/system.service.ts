import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthService } from './../../../shared/services/auth/auth.service';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SystemService {
base_href=environment.base_href+"api/";
get_all_services = "WindowsServiceControl/getAllServices/";
restart_service = "WindowsServiceControl/restartSystem/";
stop_service = "WindowsServiceControl/stopSystem/";
start_service = "WindowsServiceControl/startSystem/";
get_system_name = "WindowsServiceControl/getSystem";

  constructor(
    private http: HttpClient,
    private auth:AuthService
  ) { }

  getAllServices(cluster): Observable<any>{
    return this.http.get<any>(`${this.base_href}${this.get_all_services}?cluster=${cluster}`);
  }
  restartService(resourceNames,system_name): Observable<any>{
    return this.http.get<any>(`${this.base_href}${this.restart_service}?cluster=${system_name}&clientId=Sandbox&clientVersion=204.1.0.1035a.PSI&hasGatewayAdapter=false&adapterName=&adapterServer=&resourceNames=${resourceNames}&userName=Ranjana.Ghosh&environmentId=A05`);
  }
  stopService(resourceNames,system_name): Observable<any>{
    return this.http.get<any>(`${this.base_href}${this.stop_service}?cluster=${system_name}&clientId=Sandbox&clientVersion=204.1.0.1035a.PSI&hasGatewayAdapter=false&adapterName=&adapterServer=&resourceNames=${resourceNames}&userName=Ranjana.Ghosh&environmentId=A05`);
  }
  startService(resourceNames,system_name): Observable<any>{
    return this.http.get<any>(`${this.base_href}${this.start_service}?cluster=${system_name}&clientId=Sandbox&clientVersion=204.1.0.1035a.PSI&hasGatewayAdapter=false&adapterName=&adapterServer=&resourceNames=${resourceNames}&userName=Ranjana.Ghosh&environmentId=A05`);
  }
  getSystemName():Observable<any>{
    return this.http.get<any>(`${this.base_href}${this.get_system_name}`);
  }
  

}
