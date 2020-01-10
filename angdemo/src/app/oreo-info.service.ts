import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OreoInfoService {



  constructor() { }
  
  name=new  BehaviorSubject<any>("default1");
  value=new  BehaviorSubject<any>("default1");
  price=new  BehaviorSubject<any>("sfdf");

  updatedDataSelection(name: any,value:any,price:any){

    this.name.next(name);
    this.value.next(value);
    this.price.next(price);
  }

  getOreoInfo()
  {
    
    return [
      { name: 'Simple Black Clock', value: "assets/images/cycle.jpg",price:"$80" },
      { name: 'Simple Black Clock', value: "assets/images/flower.jpg" ,price:"$90" },
      { name: 'HeadPhone', value: "assets/images/headphone.jpg",price:"$60"  }, 
      { name: 'Brone Lamp Glsses',value: "assets/images/abc.jpg" ,price:"$180" },
      { name: 'Bag',value: "assets/images/bag.jpg",price:"$280"  },
      { name: 'Flower',value: "assets/images/pixels.jpeg" ,price:"$380" }


    ];
  }
}
