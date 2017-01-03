    class ScoreUI {

      constructor(domElement, amountDigits, startValue){
          this.domElement = domElement;
          var domToCounter = domElement.querySelector('.counter');

          this.scoreCounter = new ScoreCounter(domToCounter, amountDigits, startValue);
          var input = domElement.querySelector('.value');


          input.setAttribute("max", this.scoreCounter.maximumValue);
          input.setAttribute("min", 0);
          input.value = this.scoreCounter.counterValue;
          this.prepareEvents();
      }

      prepareEvents(){

          var scoreCounter = this.scoreCounter;
          var counterDom = this.domElement;
          counterDom.querySelector('.up').addEventListener('click',function(evt){
              evt.preventDefault();
              scoreCounter.up();
          }, false);
          counterDom.querySelector('.down').addEventListener('click',function(evt){
              evt.preventDefault();
              scoreCounter.down();
          }, false);
          counterDom.querySelector('.get').addEventListener('click',function(evt){
              evt.preventDefault();
              scoreCounter.value();
          }, false);
          counterDom.querySelector('.set').addEventListener('click',function(evt){
              evt.preventDefault();
              var value = counterDom.querySelector('.value').value;
              scoreCounter.value(value);
          }, false);
          /*
          counterDom.querySelector('.value').addEventListener('change', function(evt){
              evt.preventDefault();
              var value = counterDom.querySelector('.value').value;
              scoreCounter.value(value);
          });*/
          counterDom.querySelector('.reset').addEventListener('click',function(evt){
              evt.preventDefault();
              scoreCounter.reset();
          }, false);


      }


    }
