import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpeechService {
  private utterance = new SpeechSynthesisUtterance();

  speakText(text: string) {
    this.utterance.text = text;
    this.utterance.rate = 0.9;
    window.speechSynthesis.speak(this.utterance);
  }

  cancelSpeech() {
    window.speechSynthesis.cancel();
  }
}
