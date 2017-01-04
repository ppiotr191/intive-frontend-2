class ScoreCounter {

    constructor(domElement, amountDigits, startValue) {
        this.domElement = domElement;
        this.amountDigits = amountDigits;
        this.maximumValue = this.countMaximumValue(amountDigits);

        let startValueString = String(startValue);
        if (startValueString.length > parseInt(amountDigits)) {
            startValueString = startValueString.substr(0, amountDigits);
            this.counterValue = parseInt(startValueString);

        } else {
            this.counterValue = startValue;
        }

        this.refresh();
    }

    countMaximumValue(amountDigits) {
        let maximumValue = ''
        for (let i = 0; i < amountDigits; i++) {
            maximumValue += '9';
        }
        return parseInt(maximumValue);
    }

    refresh() {
        var domElement = this.domElement;
        domElement.className = "counter";
        var valueToInnerHTML = Array(Math.max(this.amountDigits - String(this.counterValue).length + 1, 0)).join(0) + this.counterValue;
        domElement.innerHTML = valueToInnerHTML;

        setTimeout(function() {
            domElement.className = "counter show";
        }, 200);
    }

    up() {
        if (this.counterValue < this.maximumValue) {
            this.counterValue += 1;
        } else {
            this.counterValue = 0;
        }
        this.refresh();
    }

    down() {
        if (this.counterValue > 1) {
            this.counterValue -= 1;
        } else {
            this.counterValue = this.maximumValue;
        }
        this.refresh();
    }

    value(value) {
        if (typeof value === "undefined") {
            alert(this.counterValue);
            return value;
        }

        let counterValue = parseInt(value);

        if (isNaN(counterValue)){
            console.log("Refresh");
            return false;
        }

        if (counterValue > this.maximumValue) {
            this.counterValue = this.maximumValue;
        } else if (counterValue < 0) {
            this.counterValue = 0;
        } else {
            this.counterValue = counterValue;
        }
        this.refresh();
    }
    reset() {
        this.counterValue = 0;
        this.refresh();
    }
}
