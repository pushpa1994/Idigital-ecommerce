import { Component, signal } from '@angular/core';
import { ApiService } from './api-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client');

  constructor(private api : ApiService){
    this.api.getAllItems().subscribe(res => {
      console.log(">>>>Items"+ res);
    })

    this.api.getUserCart('68ccfce30aa40e0c38db2f16').subscribe(res => {
      console.log(">>>>>cartItems"+res);
    })
  }


  public addItem(){
    const item = {
      name : "kurti",
      image: "https://lipsum.app/640x480",
      price: 500,
      seller: "myntra"

    }
    this.api.addItems(item).subscribe(res => {
      console.log(res);
    })
  }

  public addTOCart(){
    const item ={
      "userId" : "68ccfce30aa40e0c38db2f16",
     
        "itemId": "68ccff7eb3cc2808beaf65e0",
        "quantity": "2"
      

    }
    this.api.addToCart(item).subscribe(res => {
      console.log(res);
    })

  }
}
