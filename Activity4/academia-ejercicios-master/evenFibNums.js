/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */

function _sumFibs( maxFibValue ) {
  var sum = 0;

  // do your work here
  var arreglo=[1,2];
  for(var i=3; i<=maxFibValue; i++){
    
    var tempoNext = arreglo[i] + arreglo[i-1];
    arreglo.push(tempoNext);
    //console.log(arreglo);
    console.log(tempoNext);
  }
  return sum;
}
_sumFibs(89);



// bonus round
/*
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input
  

  //do your work here

  return highest;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
/*
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};
*/