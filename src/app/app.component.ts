import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HighlightTextPipe} from "./highlight-text.pipe";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, HighlightTextPipe],
  template: `
    <input [(ngModel)]="search" (ngModelChange)="filterCountries()">
    <ul>
      @for (country of filteredCountries; track countries) {
        <li [innerHTML]="country | highlightText : search"></li>
      }
    </ul>
  `,
})
export class AppComponent {
  readonly countries = ['Afghanistan', 'Brazil', 'Canada', 'Denmark', 'Egypt', 'Fiji', 'Germany'];
  filteredCountries = this.countries;
  search = '';

  filterCountries() {
    this.filteredCountries = this.countries.filter(country =>
      country.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}
