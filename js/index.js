//zapping specific items in an array

function createZapArray() {
  var str = document.getElementsByName('zapArray')[0].value;
  console.log("string" + str);
  var argumentArray = str;
  console.log("new array" + argumentArray);
  destroyer(argumentArray);

  function destroyer() {
    //taking my string input and parsing it at the initial array and the arguments. turn string into two strings after "],"

    var breakStringLocation = argumentArray.indexOf("],");

    console.log("numbered location of issue: " + breakStringLocation);

    var arrayAlone = str.substring(1, breakStringLocation);
    console.log("array alone: " + arrayAlone);

    var argumentsAlone = str.substring(breakStringLocation + 2, str.length)
    console.log("arguments alone: " + argumentsAlone);
    //turn each of these into arrays
    var arrayArguments = argumentsAlone.split(",");
    console.log(arrayArguments);
    var array = arrayAlone.split(",");
    console.log(array);
    //filter these two arrays against each other
    //use indexOf from the array to check if each things to destroy is in it (not to destroy mean -1 is returned and thus a false is passed and the value is kept) 
    var output = array.filter(function destroy(value, index, array) {
      return arrayArguments.indexOf(value) === -1;
    });
    console.log("results after filter" + output);
    document.getElementsByName('zappedArray')[0].value = output;

  }
}
//createZapArray([1, 2, 3, 1, 2, 3], 2, 3);
//createZapArray();
//

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function isEven(value, index, array) {
  if (value % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function isOdd(value, index, array) {
  if (value % 2 != 0) {
    return true;
  } else {
    return false;
  }
}

var resultEven = myArray.filter(isEven);
var resultOdd = myArray.filter(isOdd);

console.log(resultEven);
//document.write("<br><br>", resultEven, "<br>");
console.log(resultOdd);
//document.write("<br>", resultOdd, "<br>");

function calculateArea() {
  var base = document.getElementsByName('width')[0].value;
  var height = document.getElementsByName('height')[0].value;
  var out = (1 / 2) * parseFloat(base) * parseFloat(height);

  document.getElementsByName('output')[0].value = out;

}

function getOdd() {
  document.getElementsByName('isOddOutput')[0].value = resultOdd;
}

function getEven() {

  document.getElementsByName('isEvenOutput')[0].value = myArray.filter(isEven);
}

//function add(text){
//   var TheTextBox = document.getElementById("Mytextbox");
//   TheTextBox.value = TheTextBox.value + text;
//}

// remove duplicates from an array
function removeDuplicateArray() {
  var str = document.getElementsByName('arrayWithDuplicates')[0].value;
  console.log(str);
  var myArrayNames = str.split(",");
  console.log(myArrayNames);
  //document.getElementsByName('userArray')[0].value = userArray;

  // var myArrayNames = ["Sam", "Mark", "Tim", "Sam"]

  var nameResults = myArrayNames.filter(function(value, index, array) {
    return myArrayNames.indexOf(value) == index;
  });
  console.log(nameResults)
  var newResults = nameResults
  console.log(newResults);
  document.getElementsByName('duplicateArrayResults')[0].value = newResults;
  //document.write(nameResults);

};

function createArray() {
  var str = document.getElementsByName('array')[0].value;
  console.log(str);
  var userArray = str.split(",");
  console.log(userArray);
  document.getElementsByName('userArray')[0].value = userArray;
}