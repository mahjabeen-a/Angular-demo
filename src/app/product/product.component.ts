import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[];
  constructor() {
    this.products = [ {id: 1, name: "One plus nord", price: 25000, description: "Triple rear camera", imagepath: "./assets/images/oneplus.jpg"}, 
                      {id: 2, name: "Redmi Note 10 pro", price: 18000, description: "Quad camera", imagepath: "./assets/images/redmi.jpg"},
                      {id: 3, name: "Samsung Galaxy", price: 10000, description: "Quad camera", imagepath: "./assets/images/samsung.jpg"}
                    ]
  }

  ngOnInit(): void {
  }

}
