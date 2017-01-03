  class ScoreManager{

      constructor(add_counters_form, elements_container, template){
          this.add_counters_form = add_counters_form;
          this.elements_container = elements_container;
          this.template = template;
          var scoreManager = this;

          this.add_counters_form.addEventListener('submit', function(evt){
              evt.preventDefault();
              var startValue = parseInt(this.querySelector('input[name="number"]').value);
              var amountDigits = parseInt(this.querySelector('input[name="digits"]').value);

              if ((startValue >= 0) && (amountDigits > 0)){
                  scoreManager.addElement(amountDigits, startValue);
              }
          }, false);

      }

      addElement(amountDigits, startValue){
          var cln = this.template.cloneNode(true);
          cln.className = "score";

          var scoreManager = this;
          var firstElement = this.elements_container.querySelector(".score");

          var inserted = this.elements_container.insertBefore(cln,firstElement);
          var scoreUI = new ScoreUI(inserted, amountDigits, startValue);

          inserted.querySelector('.delete').addEventListener('click',function(evt){
              evt.preventDefault();
              scoreManager.elements_container.removeChild(this.parentElement.parentElement);
          }, false);
      }



  }
