import { Component, OnInit } from '@angular/core';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';
import { DbConnectService } from '../services/db-connect.service';
@Component({
  selector: 'app-db-connect',
  templateUrl: './db-connect.component.html',
  styleUrls: ['./db-connect.component.scss']
})
export class DbConnectComponent implements OnInit {
  dataSource = [];
  rows = [];
  constructor(
    private dbConnSer:DbConnectService,
    private loader : AppLoaderService
  ) { }

  ngOnInit(): void {
    this.getDBdata();
  }


  getDBdata(){
    this.loader.open();
    this.dbConnSer.DBConnection().subscribe(
      (res)=>{
      this.dataSource = res;
      this.dataSource = [...this.dataSource]
      this.loader.close();
      },
      err => {
        this.loader.close();
      }
    )
  }

  getImage(id){
    console.log(id)
    var item;
    this.dataSource.forEach(element => {
      if(element.id === id)
      {
        item = element
       
      }
    });
    //if()
  if(item.small_image.substring(0,5) === 'https'){
    return item.small_image;
  }
  else{
    return item.image;
  }
   // return id;
  }

}
