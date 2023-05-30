import { Component, OnInit } from '@angular/core';
import { APIService } from '../core/api.service';
import { Products } from './products.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products: Products[]=[];
  newProduct:FormGroup;
  showForm: boolean = false;
  constructor(private _productsService: APIService, private _formBuilder:FormBuilder){
    this.newProduct = this._formBuilder.group({
      title:this._formBuilder.control('',Validators.required),
      price:this._formBuilder.control('',Validators.required),
      description:this._formBuilder.control('',Validators.required),
      category:this._formBuilder.control('',Validators.required),
      image:this._formBuilder.control('',Validators.required)
    })
  }
  ngOnInit(): void {
    this._productsService.getProducts().subscribe(data =>{
      this.products = data
    })
  }
  addNewProduct(newProduct: Products) {
    this._productsService.addProduct(newProduct).subscribe(result => {
      this.products.unshift(result)
    })
  }

  submittedAddProduct(){
    if(this.newProduct.valid){
      const data = {
        title: this.newProduct.value.title,
        price: this.newProduct.value.price,
        description: this.newProduct.value.description,
        category: this.newProduct.value.category
      }
      this.addNewProduct(data);
      this.newProduct.reset();
      this.showForm = false;
    } 
  }

  deleteProductById(id:number | undefined){
    if (id !== undefined){
      this._productsService.deleteProduct(id).subscribe(result => {
        const productIndex = this.products.findIndex(singleProduct => singleProduct.id === id);
        if (productIndex > -1) {
          this.products.splice(productIndex,1)
        }
      })
    }
  }

  get title(){
    return this.newProduct.get('title') as FormControl
  }
  get price(){
    return this.newProduct.get('price') as FormControl
  }
  get description(){
    return this.newProduct.get('description') as FormControl
  }
  get category(){
    return this.newProduct.get('category') as FormControl
  }
  get image(){
    return this.newProduct.get('image') as FormControl
  }
}
