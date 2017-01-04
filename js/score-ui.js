    class ScoreUI {

        constructor(domElement, amountDigits, startValue) {
            this.domElement = domElement;
            let domToCounter = domElement.querySelector('.counter');
            this.scoreCounter = new ScoreCounter(domToCounter, amountDigits, startValue);
            let input = domElement.querySelector('.value');

            input.setAttribute("max", this.scoreCounter.maximumValue);
            input.setAttribute("min", 0);
            input.value = this.scoreCounter.counterValue;
            this.prepareEvents();
        }

        prepareEvents() {
            let scoreCounter = this.scoreCounter;
            let counterDom = this.domElement;
            counterDom.querySelector('.up').addEventListener('click', evt => {
                evt.preventDefault();
                scoreCounter.up();
            }, false);
            counterDom.querySelector('.down').addEventListener('click', evt => {
                evt.preventDefault();
                scoreCounter.down();
            }, false);
            counterDom.querySelector('.get').addEventListener('click', evt => {
                evt.preventDefault();
                scoreCounter.value();
            }, false);
            counterDom.querySelector('.set').addEventListener('click', evt => {
                evt.preventDefault();
                var value = counterDom.querySelector('.value').value;
                scoreCounter.value(value);
            }, false);
            counterDom.querySelector('.reset').addEventListener('click', evt => {
                evt.preventDefault();
                scoreCounter.reset();
            }, false);
        }
    }
