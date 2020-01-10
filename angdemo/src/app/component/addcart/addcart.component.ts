import { Component, OnInit } from '@angular/core';
import { OreoInfoService } from 'src/app/oreo-info.service';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.scss']
})
export class AddcartComponent implements OnInit {

  constructor(private oreoinfo:OreoInfoService) { }

  name:any;
  value:any;
  price:any;


  ngOnInit() {
    this.name=this.oreoinfo.name;
    this.value=this.oreoinfo.value;
    this.price=this.oreoinfo.price;
    
    // this.name=this.oreoinfo.name;
    // this.name=this.oreoinfo.name;

  }

}
