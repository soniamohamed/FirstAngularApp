import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { GalleryChildrenData } from '../../gallery-children-data';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
   // تخزين البيانات لعرضها في القائمة الجانبية
  menuItems = GalleryChildrenData.filter(item => item.path !== ''); // استبعاد مسار التوجيه الفارغ (Redirect)
  // دالة لتنظيف العنوان والتأكد أنه نص حصراً
formatTitle(title: string | unknown): string {
  if (typeof title === 'string') {
    return title.replace('Route | ', '').replace(' Page', '');
  }
  return ''; // لو لم يكن نصاً، إرجاع نص فارغ لتجنب الأخطاء
}
}

