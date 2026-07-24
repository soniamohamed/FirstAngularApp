import { Routes } from '@angular/router';
import { Tv } from './Components/gallery/Components/tv/tv';
import { Mobile } from './Components/gallery/Components/mobile/mobile';
import { Laptop } from './Components/gallery/Components/laptop/laptop';
import { NotFoundComponent } from './Components/not-found-component/not-found-component';

export type GalleryChildRoute = Routes[number];

export const GalleryChildrenData: GalleryChildRoute[] = [
  { path:'',redirectTo:'tv',pathMatch:'full'},
  { path: 'tv', component: Tv, title: 'Route | TV Page' },
  { path: 'mobile', component: Mobile, title: 'Route | Mobile Page' },
  { path: 'laptop', component: Laptop, title: 'Route | Laptop Page' }
];
