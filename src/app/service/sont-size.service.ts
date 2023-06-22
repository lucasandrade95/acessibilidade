import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FontSizeService {
  private fontSize = new BehaviorSubject<string>('16px');

  fontSize$ = this.fontSize.asObservable();

  increaseFontSize() {
    let currentSize = parseInt(this.fontSize.value);
    currentSize += 2;
    this.fontSize.next(`${currentSize}px`);
  }

  decreaseFontSize() {
    let currentSize = parseInt(this.fontSize.value);
    if (currentSize >= 2) { // Garante que o tamanho da fonte nunca seja menor que 2px
      currentSize -= 2;
      this.fontSize.next(`${currentSize}px`);
    }
  }
}
