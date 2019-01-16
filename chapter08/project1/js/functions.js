/* define functions here */

/*Calculates the row total based on quantity and price of the item*/
function calculateTotal(quant, price){
    return quant * price;
}
        
/*Outputs the card row using the data inputed from the loop in chapter08....js*/        
function outputCartRow(file, title, quantity, price, total){
    console.log(file + " " + title + " " + quantity + " " + price  + " " + total);
    /*should use document.write() calls to display a row of the table with passed data. 
        Use toFixed() method to display 2 decimal places. 
    */

    document.write(
        `<tr>
            <td><img src=images/${file}></td>
            <td>${title}</td>
            <td>${quantity}</td>
            <td>$${price.toFixed(2)}</td>
            <td class='itemtotals'>$${total.toFixed(2)}</td>
            </tr>`);

}

    // var row = "<tr>" +
    //     "<td><img src='images/"+file+"'></td>"+
    //     "<td>"+title+"</td>"+
    //     "<td>"+quantity+"</td>"+
    //     "<td> $"+ price.toFixed(2)+"</td>"+
    //     "<td> $"+total.toFixed(2)+"</td>"+
    //     "</tr>";
    // document.write(row);
     //}

/* function to output the totals and call the functions 
for calculating shipping, tax and grand total */
function outputTotals(runningTotal){

    var shippingTotal = getShippingTotal(runningTotal);
    var taxTotal = getTaxTotal(runningTotal);
    var grandTotal = getGrandTotal(shippingTotal, taxTotal, runningTotal);
    
    var totals = "<tr class='totals'>"+        
            "<td colspan='4'>Subtotal</td>"+
            "<td>$"+runningTotal.toFixed(2)+"</td>"+
        "</tr>"+
        "<tr class='totals'>"+
            "<td colspan='4'>Tax</td>"+
            "<td>$" + taxTotal + "</td>"+
        "</tr>"+
        "<tr class='totals'>"+
            "<td colspan='4'>Shipping</td>"+
            "<td>$"+shippingTotal+ "</td>"+
        "</tr>"+
        "<tr class='totals focus'>"+
            "<td colspan='4'>Grand Total</td>"+
            "<td>$" + grandTotal + "</td>"+
        "</tr>";


    document.write(totals);

}

/* Function for calculating and returning the shipping total based on the running total */
function getShippingTotal(runningTotal){
     var shippingTotal = 40;
      if (runningTotal > 1000){
        shippingTotal = 0;
    }
    return parseFloat(shippingTotal).toFixed(2);
}

/* Function for calculating the tax total based on the running total */
function getTaxTotal(runningTotal){
    return (runningTotal*0.10).toFixed(2);
}

/* Function for calculating and returning the grand total */
function getGrandTotal(shippingTotal, taxTotal, runningTotal){
    return (
        parseFloat(shippingTotal) + 
        parseFloat(taxTotal) + 
        parseFloat(runningTotal)
    ).toFixed(2);
}
