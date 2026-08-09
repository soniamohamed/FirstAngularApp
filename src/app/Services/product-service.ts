import { ProductResponse } from './../Models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../Components/products/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
 private readonly httpclient=inject(HttpClient);
 getallproducts():Observable<ProductResponse>
 {
  return this.httpclient.get<ProductResponse>('https://fakestoreapi.com/products');
 }

 
}
