import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CardNumberVerification } from 'card-validator/dist/card-number';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface CreditCardData {
  number: number;
  date: string;
  cvv: number;
}

@Component({
  selector: 'app-credit-card',
  template: `<div class="space-y-4 mt-2" ngForm>
    <div class="w-full relative">
      <img
        *ngIf="cardImage$ | async as cardLogo"
        class="absolute top-0 right-2 pt-1"
        [src]="cardLogo"
        alt="Visa"
        style="height:34px"
      />
      <input type="text" class="w-full" placeholder="Card Number" ngModel name="number" />
    </div>
    <div class="grid grid-cols-2 gap-4 w-3/5">
      <input type="text" placeholder="MM/YYYY" ngModel name="date" />
      <input type="text" placeholder="CVV" ngModel name="cvv" />
    </div>
  </div>`,
  styles: [
    `
      :host {
        @apply w-full;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreditCardComponent {
  cardInfo$ = new BehaviorSubject<CardNumberVerification | null>(null);
  cardImage$ = this.cardInfo$.pipe(
    map((data) => {
      if (data?.isPotentiallyValid && data.card?.type) {
        return `https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/master/logo/${data.card.type}.svg`;
      }
      return null;
    }),
  );

  @ViewChild(NgForm) form: NgForm | null = null;
}
