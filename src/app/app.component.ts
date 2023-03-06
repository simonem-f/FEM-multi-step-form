import { PrimeNGConfig } from 'primeng/api';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';

type SubscriptionPrice = {
  monthPrice: number;
  yearPrice: number;
};

type Plan = SubscriptionPrice & {
  id: number;
  label: string;
  imgUrl: string;
};

type Extra = SubscriptionPrice & {
  service: string;
  description: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(NgbCarousel) carousel: NgbCarousel = {} as NgbCarousel;

  public get getTotal(): number {
    const field = this.planForm.get('yearly')?.value
      ? 'yearPrice'
      : 'monthPrice';

    const basePlan = this.planForm.get('plan')?.value;
    const extraPrice =
      this.addOnsForm
        .get('addOns')
        ?.value?.reduce((acc, curr) => acc + curr[field], 0) || 0;
    return basePlan ? basePlan[field] + extraPrice : 0;
  }

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

  public availablePlans: Plan[] = [
    {
      id: 1,
      label: 'Arcade',
      monthPrice: 9,
      yearPrice: 90,
      imgUrl: 'icon-arcade.svg',
    },
    {
      id: 2,
      label: 'Advanced',
      monthPrice: 12,
      yearPrice: 120,
      imgUrl: 'icon-advanced.svg',
    },
    {
      id: 3,
      label: 'Pro',
      monthPrice: 15,
      yearPrice: 150,
      imgUrl: 'icon-pro.svg',
    },
  ];

  public planForm = this.fb.group({
    plan: [this.availablePlans[0], Validators.required],
    yearly: [false],
  });
  public addOnsForm = this.fb.group({
    addOns: [[] as Extra[]],
  });

  public availableAddOns: Extra[] = [
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
      service: 'Customizable Profile',
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

    // reset forms
    this.infoForm.reset();
    this.planForm.reset({
      plan: this.availablePlans[0],
      yearly: false,
    });
    this.addOnsForm.reset();
  }
}
