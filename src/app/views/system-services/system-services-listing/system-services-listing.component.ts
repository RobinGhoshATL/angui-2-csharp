import { Component, OnInit } from '@angular/core';
import { SystemService } from '../services/system.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AppConfirmService } from "../../../shared/services/app-confirm/app-confirm.service";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-system-services-listing',
  templateUrl: './system-services-listing.component.html',
  styleUrls: ['./system-services-listing.component.scss']
})
export class SystemServicesListingComponent implements OnInit {
  dataSource = [];
  system_name;
  rows = [];
  constructor(
    private systemSer:SystemService,
    private matSnackBar:MatSnackBar,
    private appConf: AppConfirmService,
    private loader: AppLoaderService,
   
    private http: HttpClient
  ) { }

  ngOnInit(): void {
   
    this.getSystemName();
   
  }

 
  getAllServices(){
    this.loader.open();
    this.systemSer.getAllServices(this.system_name).subscribe((res)=>{
     this.loader.close();
      this.dataSource = res;
      this.dataSource = [...this.dataSource]
     })
     this.loader.close();
  }

  restartService(resorceName){
   
    this.appConf.confirm(
      {
        title:"Alert",
        message:"Are you sure you want to restart the service?"
      }
    ).subscribe((res)=>{
      if(res){
        this.loader.open();
        this.systemSer.restartService(resorceName,this.system_name).subscribe(
          res=>{
            this.matSnackBar.open(res[0].message,"OK",{duration:4000})
            this.loader.close();
          },
          err=>{
            this.matSnackBar.open("Something went wrong","OK",{duration:4000})
            this.loader.close();
          }
        );
      }
    });
  
  }

  getSystemName(){
    this.systemSer.getSystemName().subscribe(res=>{
      this.system_name = res[0];
      this.getAllServices();
     
    })
  }

  startService(resorceName){
    this.appConf.confirm(   {
      title:"Alert",
      message:"Are you sure you want to start the service?"
    }).subscribe((res)=>{
      if(res){
        this.loader.open();
        this.systemSer.startService(resorceName,this.system_name).subscribe(
          res=>{
            this.loader.close();
            this.getAllServices();
            this.matSnackBar.open(res[0].message,"OK",{duration:4000})
          },
          err=>{
            this.loader.close();
            this.matSnackBar.open("Something went wrong","OK",{duration:4000})
          }
        );
      }
    });
  

  }
  stopService(resorceName){

    this.appConf.confirm(
      {
        title:"Alert",
        message:"Are you sure you want to stop the service?"
      }
    ).subscribe((res)=>{
      if(res){
        this.loader.open();
        this.systemSer.stopService(resorceName,this.system_name).subscribe(
          res=>{
            this.loader.close();
            this.getAllServices();
            this.matSnackBar.open(res[0].message,"OK",{duration:4000})
          },
          err=>{
            this.loader.close();
            this.matSnackBar.open("Something went wrong","OK",{duration:4000})
          }
        );
      }
    });
  


  }

}
