import React, {Component} from 'react';

import Header from './Header.js';
import Results from './Results.js';


class Generator extends Component {

    state = {
      verb: this.verb,
      noun: this.noun,
      formsFilled: false,
      titleSuggestions: [
        
      ]
    }
  
    handleCreateTitles = (verbInput, nounInput) => {
        console.log(verbInput);
        console.log(nounInput);

        let noun = nounInput.toLowerCase();
        let verb = verbInput.toLowerCase();
        

        this.setState(
            { verb: verbInput, 
              noun: nounInput, 
              formsFilled: true, 
              titleSuggestions: [
                {
                  title: `Hvorfor det har aldri har vært enklere å ${verb} ${noun}`,
                  clickbaitScore: '★★',
                  id: 1
                },
                {
                  title: `En ${noun} med en bisarr (men sann) historie`,
                  clickbaitScore: '★★★',
                  id: 2
                },
                {
                  title: `Skal du ${verb} ${noun}? Dette er ekspertenes råd.`,
                  clickbaitScore: '★',
                  id: 3
                },
                {
                  title: `Vurderer du å ${verb} ${noun}? Les dette først.`,
                  clickbaitScore: '★★',
                  id: 4
                },
                {
                  title: `Bør du ${verb} ${noun}? Ta testen`,
                  clickbaitScore: '★★',
                  id: 5
                },
                {
                  title: `3 bøker du må lese om du skal bli god til å ${verb} ${noun}`,
                  clickbaitScore: '★',
                  id: 6
                },
                {
                  title: `Skal du ${verb} ${noun}? Unngå disse fellene`,
                  clickbaitScore: '★★',
                  id: 7
                },
                {
                  title: `Hemmeligheten bak en fantastisk ${noun}`,
                  clickbaitScore: '★★',
                  id: 8
                },
                {
                  title: `Stor oversikt: Her er det beste innen ${noun}`,
                  clickbaitScore: '★',
                  id: 9
                },
                {
                  title: `Den overraskende grunnen til at alle prater om ${noun}`,
                  clickbaitScore: '★★★',
                  id: 10
                },
                {
                  title: `Hva er (raskeste/beste/billigste) løsningen for å ${verb} ${noun}.?`,
                  clickbaitScore: '★★',
                  id: 11
                },
                {
                  title: `Hva jeg lærte av å ${verb} ${noun}`,
                  clickbaitScore: '★★',
                  id: 12
                },
                {
                  title: `Når er det lurt å ${verb} ${noun}? (Det er ikke det du tror)`,
                  clickbaitScore: '★★★',
                  id: 13
                },
                {
                  title: `8 fakta om ${noun} (som vil snu verdensbildet ditt på hode)`,
                  clickbaitScore: '★★★',
                  id: 14
                },
                {
                  title: `Hva alle burde vite om å ${verb} ${noun}`,
                  clickbaitScore: '★★',
                  id: 13
                },
                {
                  title: `Dette bør du tenke på når du skal ${verb} ${noun}.`,
                  clickbaitScore: '★',
                  id: 14
                },
                {
                  title: `Sjekkliste før du skal ${verb} ${noun}.`,
                  clickbaitScore: '★',
                  id: 15
                },
                {
                  title: `Myter om ${noun} du sannsynligvis har trodd på hele livet`,
                  clickbaitScore: '★★★',
                  id: 16
                },
                {
                  title: `Slik får du den perfekte ${noun}, uten (noe målgruppen vil unngå)`,
                  clickbaitScore: '★★',
                  id: 17
                },
              ]}
            , function(){
              console.log(this.state.formsFilled)
            });

            
    }

  
  
    render() {
  
      return(
        <section className="generator">
          <Header 
            verb={this.state.verb}
            noun={this.state.noun}
            createTitles={this.handleCreateTitles}
          />
          <Results 
            titleSuggestions={this.state.titleSuggestions}
          />
        </section>
      )
      
    }
  
  }


  export default Generator;