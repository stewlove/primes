/*
 * Stewart Lovell
 * 2/16/2022
 * JavaScript functions working with prime numbers
 */
//Function #1 - Returns whether the number is prime
function isPrime(num)
{
    if(num === 1)
    {
        return false;
    }

    for(let i = 2; i <= num - 1; i++)
    {
        if(num % i === 0)
        {
            return false;
        }
    }
    return true;
}

//Function #2 - Returns an array of factors for the given number
function factors(num)
{
    let factorArray = [];
    for(let i = 1; i <= num; i++)
    {
        if(num % i === 0)
        {
            factorArray.push(i);
        }
    }
    return factorArray;
}

//Function #3 - Returns an array of primes within the given range
function primesIn(low, high)
{
    let holdPrimes = [];
    for(let i = low; i <= high; i++)
    {
        if(isPrime(i))
        {
            holdPrimes.push(i);
        }
    }
    return holdPrimes;
}

//Function #4 - Returns the number of primes within the given range
function howManyPrimes(low, high)
{
   let result = primesIn(low, high);
   return result.length;
}

//Function #5 - Display the factors of the given number in the top field, regardless of whether it is prime
function displayFactors(factorArray)
{
    for(let i = 0; i < factorArray.length; i++)
    {
        document.getElementById("factors").innerHTML += "<li>" + factorArray[i] + "</li>";
    }
    document.getElementById("num-factors").innerHTML += " (" + factorArray.length + ") found";
}