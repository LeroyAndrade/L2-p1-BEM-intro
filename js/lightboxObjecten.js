/*
function OOPmodaalObj(alleInformatie, alleThumbs,alleInhoud){
    Let mijnForm =this;
    mijnForm.alleInformatie = document.querySelectorAll('.informatie');
    mijnForm.alleThumbs     = document.querySelectorAll('.thumb');
    mijnForm.alleInhoud     = [];
}
*/
const modaalObj = {
    alleInformatie : document.querySelectorAll('.informatie'),
    alleThumbs     : document.querySelectorAll('.thumb'),
    alleInhoud     :  [],

    //Methodes
    verwijderModaal: function(){
        document.getElementById('modaal').remove();
        },
        
        
        
        
        
        maakModaal: function(num){
            console.log(this.alleInformatie[num]);

            //Voeg een div toe met de class 'modaal', wanneer je op alleInformatie.num klikt
            //maak het volgende element aan met de type: 'div'
          let modaal = document.createElement('section');
            //die div moet je een class geven en id om later meer vrijheid te krijgen op inhoud, dus: ='modaal'
            modaal.className= 'modaal';
            modaal.id= 'modaal';
          
            //Je roept modaal op, in de body, daar voeg je binnen het modaal, de alleInhoud[i] toe.
            //dit moet worden toegevoegd onderaan de DOM body, creëer Element, dus:
          
          
              //definiëer variabel
          let modaalContainer = document.createElement('article');
          
                //voeg class toe
                  modaalContainer.className= 'modaal-container';
          
                  //vertel dat het nummer van de geklikte inhoud, wordt getoond
                      //Geef de waarde aan die zal verschijnen wanneer de modaal is aangemaakt
                  modaalContainer.innerHTML = this.alleInhoud[num].innerHTML;
          
          //Creëer verwijder knop in het open verschenen artikel
                  let sluitKnop = document.createElement('i');
                      sluitKnop.className = 'closeAllign';
                  modaalContainer.prepend(sluitKnop);
                  modaal.append(modaalContainer);
          
          //eventListener klik op sluit button (door middel van css aangemaakt)
          sluitKnop.addEventListener('click', this.verwijderModaal)
          
          
          //EventListener klik op modaal
                  modaal.addEventListener('click', this.verwijderModaal);
                  //wanneer de modaalContainer open staat met de tekst en je er op klikt mag het modaal niet worden gesloten
                  //alleen wanneer je op modaal klikt mag de klik worden doorgegeven
          /*Delete modaal, wanneer het is geopend en je buiten het modaalContainer klikt*/
                  modaalContainer.addEventListener('click', function(e){
                    e.stopPropagation();
                  });
          
          //Roep alles op
          document.body.append(modaal);
        },

    initialiseren: function(){
        for (let i=0; i < this.alleInformatie.length; i++){
            this.alleInhoud.push(this.alleInformatie[i]);
            this.alleInformatie[i].remove();
          }

          for(let i=0; i < this.alleThumbs.length; i++){
            this.alleThumbs[i].addEventListener('click', function(){
              //this.maakModaal(i) this verwijst naar een event, daarom pas ik dit aan naar:
              modaalObj.maakModaal(i)
            })
          }
    }
}
