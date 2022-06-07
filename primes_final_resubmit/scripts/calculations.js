/*
 * Stewart Lovell
 * 2/21/2022
 * Interacting with the webpage to execute our JavaScript functions
 */

//register button clicks when the page loads

window.onload = function() {
    let analyze = document.getElementById("analyze");
    let generate = document.getElementById("generate");
    analyze.onclick = analyzeNumberOnClick;
    generate.onclick = generatePrimesOnClick;
}

function analyzeNumberOnClick(event)
{
    //prevent the form from submitting
    event.preventDefault();

    //clear out the list items and paragraphs from the previous calculation
    document.getElementById("factors").innerHTML = "";
    document.getElementById("prime-status").innerHTML = "";
    document.getElementById("analyze-error").innerHTML = "";
    document.getElementById("num-factors").innerHTML = "Factors";

    //grab the value inside the analyze button, convert it to an int
    let analyze = parseInt(document.getElementById("number").value);
    //if the number is NaN, print an error message
    if(Number.isNaN(analyze))
    {
        document.getElementById("analyze-error").innerHTML = `${analyze} is not a number`;
    }
    //if the number is not NaN, execute our functions and change elements on the page
    else
    {
        let factorPrime = isPrime(analyze);
        let factorList = factors(analyze);
        if(factorPrime)
        {
            document.getElementById("prime-status").innerHTML = `${analyze} is prime`;
            displayFactors(factorList);
        }
        else
        {
            document.getElementById("prime-status").innerHTML = `${analyze} is not prime`;
            displayFactors(factorList);
        }
    }
}

function generatePrimesOnClick(event)
{
    //prevent the form from submitting
    event.preventDefault();

    //clear out the list items and paragraphs from the previous calculation
    document.getElementById("primes-list").innerHTML = "";
    document.getElementById("generate-error").innerHTML = "";
    document.getElementById("primes-legend").innerHTML = "Primes";

    //grab the values of the high and low fields
    let low = parseInt(document.getElementById("low").value);
    let high = parseInt(document.getElementById("high").value);

    //if either input field is NaN, print an error message
    if(isNaN(low) || isNaN(high))
    {
        document.getElementById("generate-error").innerHTML = "Low or high are not a number";
    }
    //if neither input field is NaN, execute our functions and change elements on the page
    else
    {
        let primesRange = primesIn(low, high);
        for(let i = 0; i < primesRange.length; i++)
        {
            document.getElementById("primes-list").innerHTML += "<li>" + primesRange[i] + "</li>";
        }
        document.getElementById("primes-legend").innerHTML += " (" + primesRange.length + ") found";
    }
}