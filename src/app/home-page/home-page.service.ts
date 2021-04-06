import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor() { }

  cards: object[] = [
    {
      titulo: "Tempo",
      imagem: "url",
      conteudo: "bla bla bla"
    }
  ]

  addCard(conteudo: string, titulo: string, url: string){
      this.cards = [
        {
            titulo: titulo,
            conteudo: conteudo,
            url: url
        }
    ]
  }

  getCards(){
      return this.cards;
  }
}