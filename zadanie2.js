pierwszaLiczba = 100; // normalnie uzytkowanik podwalby sam te wartosci
drugaLiczba = 2;
podana = "%";

function add(a,b){
    return a+b;
}
function substruct(a,b){
    return a-b
}
function multipy(a,b){
    return a*b
}
function divide(a,b){
    if(b===0){
        return "nie dziel przez zero"
    }else{
        return a / b
    }
}

switch (podana)
{
    case "+":
        console.log("Wynik dodania: "+add(pierwszaLiczba, drugaLiczba));
        break;

    case "-":
        console.log("Wynik odejmowania: "+substruct(pierwszaLiczba, drugaLiczba));
        break;

    case "*":
        console.log("Wynik mnożenia: "+multipy(pierwszaLiczba, drugaLiczba));
        break;

    case "%":
        console.log("Wynik dzielenia: "+divide(pierwszaLiczba, drugaLiczba));
        break;

    default:
        console.log("nasz kalkulator nie obsługuje takie działania!!");
        break;
    }