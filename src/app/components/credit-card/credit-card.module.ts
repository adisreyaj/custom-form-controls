import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreditCardComponent } from './credit-card.component';

@NgModule({
  declarations: [CreditCardComponent],
  imports: [CommonModule, FormsModule],
  exports: [CreditCardComponent],
})
export class CreditCardModule {}
