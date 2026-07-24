import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { GalleryChildrenData } from '../../gallery-children-data';

@Component({
  selector: 'app-gallery',
  imports: [RouterOutlet],
  //RouterLink, RouterLinkActive, RouterOutlet
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  // // تخزين البيانات لعرضها في القائمة الجانبية
  // menuItems = GalleryChildrenData.filter(item => item.path !== ''); // استبعاد مسار التوجيه الفارغ (Redirect)
}
