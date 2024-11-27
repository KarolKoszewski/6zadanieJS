
class kalkulator{
    constructor(a,b,dzialanie){
        this.a = a;
        this.b = b;
    }
    
    add(){
        console.log(`Wynik dodawania to: ${this.a + this.b}`)
    }
    substruct(){
        console.log(`Wynik odjemowania to: ${this.a - this.b}`)
    }
    multipy(){
        console.log(`Wynik mnożenia to: ${this.a * this.b}`)
    }
    divide(){
        console.log(`Wynik dzielenia to: ${this.a / this.b}`)
    }
}
const dodawanie = new kalkulator();
kalkulator.add(1,2)
// switch (podana)
// {
//     case "+":
//         console.log("Wynik dodania: "+add(pierwszaLiczba, drugaLiczba));
//         break;

//     case "-":
//         console.log("Wynik odejmowania: "+substruct(pierwszaLiczba, drugaLiczba));
//         break;

//     case "*":
//         console.log("Wynik mnożenia: "+multipy(pierwszaLiczba, drugaLiczba));
//         break;

//     case "%":
//         console.log("Wynik dzielenia: "+divide(pierwszaLiczba, drugaLiczba));
//         break;

//     default:
//         console.log("nasz kalkulator nie obsługuje takie działania!!");
//         break;
//     }