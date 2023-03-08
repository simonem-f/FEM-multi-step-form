import { PrimeNGConfig } from 'primeng/api';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { Extra, Plan } from 'src/assets/om/om';
import { EXTRAS, PLANS } from 'src/assets/data/form-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(NgbCarousel) carousel: NgbCarousel = {} as NgbCarousel;

  get getTotal(): number {
    const field = this.planForm.get('yearly')?.value
      ? 'yearPrice'
      : 'monthPrice';

    const basePlan = this.planForm.get('plan')?.value;
    const extras = this.addOnsForm.get('addOns')?.value;
    const extraPrice = extras?.reduce((acc, curr) => acc + curr[field], 0) || 0;
    return basePlan ? basePlan[field] + extraPrice : 0;
  }

  public carouselIndex = 0;
  public btnDisabled = false;
  public readonly availablePlans: Plan[] = PLANS;
  public readonly availableAddOns: Extra[] = EXTRAS;

  // NG reactive forms
  public infoForm;
  public planForm;
  public addOnsForm;

  constructor(private primengConfig: PrimeNGConfig, private fb: FormBuilder) {
    // STEP 1 - info
    this.infoForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(new RegExp('^\\+?\\d{9,11}$')),
        ],
      ],
    });

    // STEP 2 - plan
    this.planForm = this.fb.group({
      plan: [this.availablePlans[0], Validators.required],
      yearly: [false],
    });

    // STEP 3 - add ons
    this.addOnsForm = this.fb.group({
      addOns: [[] as Extra[]],
    });
  }

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

  changePlan(event: MouseEvent): void {
    // prevent default and go to plan form
    event.preventDefault();
    this.carousel.select('plan');
    this.carouselIndex = 1;
  }
}
