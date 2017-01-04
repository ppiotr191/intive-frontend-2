  class ScoreManager {

      constructor(add_counters_form, elements_container, template) {
          this.add_counters_form = add_counters_form;
          this.elements_container = elements_container;
          this.template = template;

          this.add_counters_form.addEventListener('submit', evt =>  {
              evt.preventDefault();
              let startValue = parseInt(this.add_counters_form.querySelector('input[name="number"]').value);
              let amountDigits = parseInt(this.add_counters_form.querySelector('input[name="digits"]').value);

              if ((startValue >= 0) && (amountDigits > 0)) {
                  this.addElement(amountDigits, startValue);
              }
          }, false);
      }

      addElement(amountDigits, startValue) {
          let cln = this.template.cloneNode(true);
          cln.className = "score";
          let firstElement = this.elements_container.querySelector(".score");
          let inserted = this.elements_container.insertBefore(cln, firstElement);
          let scoreUI = new ScoreUI(inserted, amountDigits, startValue);
          let deleteButton = inserted.querySelector('.delete');
          let elementToRemove = deleteButton.parentElement.parentElement;

          deleteButton.addEventListener('click', evt =>  {
              evt.preventDefault();
              this.elements_container.removeChild(elementToRemove);
          }, false);
      }
  }
