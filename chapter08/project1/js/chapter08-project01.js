/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */
var runningTotal = 0;

for(let i=0; i < this.filenames.length; i++){
    var rowTotal = this.calculateTotal(this.quantities[i], this.prices[i]);
    this.outputCartRow(this.filenames[i], 
        this.titles[i], 
        this.quantities[i], 
        this.prices[i], 
        rowTotal
    );
    runningTotal = runningTotal + rowTotal;
}

this.outputTotals(runningTotal)