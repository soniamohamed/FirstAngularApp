import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Contact } from './Components/contact/contact';
import { About } from './Components/about/about';
import { NotFoundComponent } from './Components/not-found-component/not-found-component';
import { Gallery } from './Components/gallery/gallery';
import { GalleryChildrenData } from './gallery-children-data';

export const routes: Routes = [
    { path:'',
    redirectTo:'home',
    pathMatch:'full'},
    {path:'home',component:Home,title:'Route | Home Page'},
    {path:'contact',component:Contact,title:'Route | Contact Page'},
    {path:'about',component:About,title:'Route | About Page'},
    {path:'gallery',component:Gallery,title:'Route | Gallery Page'
         ,children:GalleryChildrenData },

//    {path:'tv',component:Tv,title:'Route | Gallery| Tv Page'}, 
//     {path:'laptop',component:Laptop,title:'Route | Gallery| Laptop Page'}
//     ]
//},
    { path: '**', component: NotFoundComponent,title:'Route | NotFound Page' }
];
