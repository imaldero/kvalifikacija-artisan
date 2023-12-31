import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { MainBannerComponent } from '../main-banner/main-banner.component';
import { SaleBannerComponent } from '../sale-banner/sale-banner.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    CategoryCardComponent,
    MainBannerComponent,
    SaleBannerComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
