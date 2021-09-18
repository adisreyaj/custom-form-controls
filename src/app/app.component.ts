import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form = this.fb.group({
    name: ['Adithya', [Validators.required]],
    website: ['https://adi.so', [Validators.required]],
    server: ['IN', Validators.required],
    creditCard: [
      {
        number: 4242424242424,
        date: '04/25',
        cvv: 880,
      },
      Validators.required,
    ],
  });

  constructor(private fb: FormBuilder) {
    this.form.valueChanges.subscribe(console.info);
  }

  toggleServerDisable() {
    const server = this.form.get('server');
    server?.disabled ? server.enable() : server?.disable();
  }
}
