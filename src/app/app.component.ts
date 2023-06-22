import { Component } from '@angular/core';
import {SpeechService} from "./service/speech-service.service";
import {FontSizeService} from "./service/sont-size.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto de Acessibilidade';
  fontSize$ = this.fontSizeService.fontSize$;

  constructor(
    private speechService: SpeechService,
    private fontSizeService: FontSizeService
  ) {}

  speak(text: string) {
    this.speechService.speakText(text);
  }

  stopSpeaking() {
    this.speechService.cancelSpeech();
  }

  textToSpeech(text: string) {
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = 'pt-BR';
    window.speechSynthesis.speak(speech);
  }

  increaseFontSize() {
    this.fontSizeService.increaseFontSize();
  }

  decreaseFontSize() {
    this.fontSizeService.decreaseFontSize();
  }
}
