import { Component, OnInit } from '@angular/core';
import { blackjackModel } from './blackjack.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.scss']
})
export class BlackjackComponent implements OnInit {

  showMessage = false;
  drawncard = "";
  message = "";
  player = "Player";
  isDeal = false;
  dealersHand:Array<String> = [];
  playersHand:Array<String> = [];
  dealersHandValue = 0;
  playersHandValue = 0;
  isDisplayStandBtn = true;
  isHitBtnDisabled = false;

  deckOfCardNumber = 6;
  deckOfCardSuite = "H";
  deckOfCardPngUrl = "";
  isDisplayShuffleBtn = false;

  blackJackModel = blackjackModel;
  deckOfCard = [];

  selectedCard = "";

  constructor() { }

  ngOnInit(): void {
  }

  startDealing(){
    this.isDeal =  true;
    this.valueOfDealerCardsInHand()
    this.valueOfDealerCardsInHand()
    this.valueOfPlayerCardsInHand()
    this.valueOfPlayerCardsInHand()
  }

  hitMe() {
      // this.playersHand.push(this.drawCardFromDeck());
      this.isDisplayShuffleBtn = false;
      this.valueOfPlayerCardsInHand()
      this.valueOfDealerCardsInHand()
      console.log('playersHandSum: ', this.playersHandValue)

      console.log('handValue: ', this.playersHandValue)
      if(this.playersHandValue>21){
        if(this.dealersHandValue>21){
          this.message = "You Win!! 🤗 Yaay!!"
          this.showMessage = true
          this.isHitBtnDisabled = true;
          this.isDisplayShuffleBtn = true;
          this.isDisplayStandBtn = false;
        }else{
          this.message = "Busted! 😭" 
          this.showMessage = true
          this.isDisplayStandBtn = false;
          this.isDisplayShuffleBtn = true;
          this.isHitBtnDisabled = true;
        }
      }else if(this.playersHandValue<21){
        this.message = ""
        this.isDisplayStandBtn = true;
      }else{
        this.message = "BlackJack 🤗 Yaay!!"
        this.showMessage = true
        this.isHitBtnDisabled = true;
        this.isDisplayShuffleBtn = true;
        this.isDisplayStandBtn = false;
      }
  }

  drawCardFromDeck(){
    return Math.floor(Math.random()*(14-1)+1)
  }

  getDrawnCardFromDeck(participantUrl:any){
    // var cardPngUrl = this.getCardPngUrl()
    // participantUrl.push(cardPngUrl);
    // return participantUrl.charAt(38);
    return ''
  }

  getPlayerDrawnCardFromDeck(){
    var cardPngUrl = this.getCardPngUrl()
    this.playersHand.push(cardPngUrl);
    return cardPngUrl.charAt(38);
  }

  getDealerDrawnCardFromDeck(){
    var cardPngUrl = this.getCardPngUrl()
    this.dealersHand.push(cardPngUrl);
    return cardPngUrl.charAt(38);
  }

  getCardPngUrl(){
    var number = ["A","2","3","4","5","6","7","8","9","J","Q","K"];
    var suite = ["C", "S", "H", "D"];
    var dcn = number[Math.floor(Math.random()*(number.length-0)+0)];
    var dcs = suite[Math.floor(Math.random()*(suite.length-0)+0)];

    var keys = Object.keys(this.deckOfCard);
    var randomPackFromDeck = this.deckOfCard[keys[keys.length * Math.random() << 0]];
    // var cardsArr = this.deckOfCard[0];
    console.log(' randomPackFromDeck Picked: ', randomPackFromDeck)
    this.selectedCard = randomPackFromDeck[(Math.floor(Math.random()*(randomPackFromDeck.length-0)+0))]
    console.log('selectedCard Picked: ', this.selectedCard)

    return "https://deckofcardsapi.com/static/img/" + dcn + dcs +".png";
  }

  getDrawnCardValue(drawnCardValue:any){
    if(drawnCardValue==="A"){
      if(this.playersHandValue===10){
        return 11;
      }else{
        return 1;
      }
    }else if(drawnCardValue==="J"||drawnCardValue==="Q"||drawnCardValue==="K"){
      return 10;
    }else{
      return Number(drawnCardValue);
    }
  }

  valueOfPlayerCardsInHand(){
    this.playersHandValue += this.getDrawnCardValue(this.getPlayerDrawnCardFromDeck());
  }

  valueOfDealerCardsInHand(){
    this.dealersHandValue += this.getDrawnCardValue(this.getDealerDrawnCardFromDeck());
  }

  stopDealing(){
    this.showMessage = true;
    this.isDisplayStandBtn = false;
    this.isDisplayShuffleBtn = true;
    this.isHitBtnDisabled = true;
    this.message = "Game Stopped!! 🛑"
  }

  beginHouseDealing(){

  }

  shuffleCards(){
    this.drawncard = ''
    this.message = ''
    this.playersHandValue = 0;
    this.dealersHandValue = 0;
    this.playersHand = []
    this.dealersHand = []
    this.isHitBtnDisabled = false;
    this.isDisplayStandBtn = true;
    this.isDisplayShuffleBtn = false;
    this.startDealing();
  }
  resetGame(){
    window.location.reload();
  }

}
