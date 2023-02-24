function Addition(){
    let value1 = document.getElementById("vl1").value;
    let value2 = document.getElementById("vl2").value;
    let Result =Number (value1) +Number(value2) ;
    document.getElementById("Result").innerHTML= Result;

}
function Subtraction(){
    let value1 = document.getElementById("vl1").value;
    let value2 = document.getElementById("vl2").value;
    let Result1 = Number(value1)- Number(value2) ;
    document.getElementById("Result").innerHTML= Result1;
}
function Multi(){
    let value1 = document.getElementById("vl1").value;
    let value2 = document.getElementById("vl2").value;
    let Result2 = Number(value1)* Number(value2);
    document.getElementById("Result").innerHTML= Result2;

}
function Division(){
    let value1 = document.getElementById("vl1").value;
    let value2 = document.getElementById("vl2").value;
    let Result3 = Number(value1)/ Number(value2);
    document.getElementById("Result").innerHTML= Result3;
}


