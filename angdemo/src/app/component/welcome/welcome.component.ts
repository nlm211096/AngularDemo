import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OreoInfoService } from 'src/app/oreo-info.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router:Router,private oreinfoservice:OreoInfoService) { }

public oreoinfo=[];

  
    
    

  ngOnInit() {
    this.oreoinfo=this.oreinfoservice.getOreoInfo();
  }


  onclick(name:any,value:any,price:any)
    {
      this.oreinfoservice.updatedDataSelection(name,value,price);
      // this.oreinfoservice.price=price;
      // this.oreinfoservice.value=value;
      this.router.navigateByUrl("addcart")
    }

}
