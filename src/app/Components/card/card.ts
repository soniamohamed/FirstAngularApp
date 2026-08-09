
import { Component,Input } from '@angular/core';
import { ProductData } from '../../Models/product-data';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
 @Input({required:true}) product:ProductData={} as ProductData;
}
