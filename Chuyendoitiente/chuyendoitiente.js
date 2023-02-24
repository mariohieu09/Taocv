function ChangeMoney(){
   let amount = document.getElementById("amount").value;
   let fromc = document.getElementById("from").value;
   let to = document.getElementById("to").value;
   let Result;
if ( fromc == "Usd" && to == "Vnd"){
    Result = "Result: " + (amount *23000) + "D";
}
else if (fromc == "Vnd"&& to == "Usd"){
    Result = "Result: " + (amount/23000) + "$";
}
else if (fromc == "Vnd") {
    Result = "Result: " + (amount) + "D";
} else {
    Result = "Result" + (amount) + "$";
}
document.getElementById("Result").innerHTML = Result;
}
