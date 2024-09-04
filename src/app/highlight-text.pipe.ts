import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightText',
  standalone: true,
})
export class HighlightTextPipe implements PipeTransform {
  transform(text: string, search: string): string {
    if (!search) {
      return text;
    }

    const searchChars = search.toLowerCase().split('');
    return text.split('').map(char => {
      if (searchChars.includes(char.toLowerCase())) {
        return `<span class="highlight">${char}</span>`;
      }
      return char;
    }).join('');
  }
}
