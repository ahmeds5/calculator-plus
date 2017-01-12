//Business End
var add = (function(num1, num2){
  return num1 + num2;
});

var subtract = (function(num1, num2){
  return num1 - num2;
});

var multiply = (function(num1, num2){
  return num1 * num2;
});

var divide = (function(num1, num2){
  return num1 / num2;
});

var operation = (function(opInput, num1, num2) {
    if (opInput === "add") {
    return add(num1, num2);
  } else if (opInput === "subtract") {
    return subtract(num1, num2);
  } else if (opInput === "multiply") {
    return multiply(num1, num2);
  } else if (opInput === "divide") {
    return divide(num1, num2);
  } else {
  $("#output").text("You need to select a operation.");
  };
});


//User End

$(function(){
  $("#blank").submit(function(event){
    var inputNum1 = parseFloat($("#firstnum").val());
    var inputNum2 = parseFloat($("#secondnum").val());
    var operationInput = $("input:radio[name=operator]:checked").val();

    var result = operation(operationInput, inputNum1, inputNum2);

    $("#output").text(result);
    event.preventDefault();
  });
});
