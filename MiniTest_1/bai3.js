function up(){
    let valueup = document.getElementById("pp").value;
    valu2 = parseInt(valueup) + 2  ;
    document.getElementById("pp").value = valu2;

}
function down(){
    let valuedown = document.getElementById("pp").value;
    valu = parseInt(valuedown) - 2;
    document.getElementById("pp").value = valu;
}