import { PrimeNGConfig } from 'primeng/api';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(NgbCarousel) carousel: NgbCarousel = {} as NgbCarousel;

  public carouselIndex = 0;
  public btnDisabled = false;

  // NG reactive forms
  public infoForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [
      '',
      [Validators.required, Validators.pattern(new RegExp('^\\+?\\d{9,11}$'))],
    ],
  });
  public yearly = false;
  public plan: 1 | 2 | 3 = 1;
  //public addOns = [];

  public availablePlans = [
    { id: 1, label: 'Arcade', monthPrice: 9, yearPrice: 90 },
    { id: 2, label: 'Advanced', monthPrice: 12, yearPrice: 120 },
    { id: 3, label: 'Pro', monthPrice: 15, yearPrice: 150 },
  ];
  public availableAddOns = [
    {
      service: 'Online service',
      description: 'Access to multiplayer games',
      monthPrice: 1,
      yearPrice: 10,
    },
    {
      service: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      monthPrice: 2,
      yearPrice: 20,
    },
    {
      service: 'Customizable Profilee',
      description: 'Custom theme on your profile',
      monthPrice: 2,
      yearPrice: 20,
    },
  ];

  constructor(private primengConfig: PrimeNGConfig, private fb: FormBuilder) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  // carousel controls -------------------
  onSlideStart(): void {
    this.btnDisabled = true;
  }

  onSlideEnd(): void {
    this.btnDisabled = false;
  }

  onBack(): void {
    this.carouselIndex--;
    this.carousel.prev();
  }

  onNext(): void {
    this.carouselIndex++;
    this.carousel.next();
  }

  onReset(): void {
    this.carousel.select('info');
    this.carouselIndex = 0;
  }
}
