class student{
    constructor(imie, wiek, oceny, dodaj,ocenyPoDodaniu){
        this.oceny = [1,2,3,4,5];
        this.dodaj = dodaj;
        this.ocenyPoDodaniu = [];

    }
    addGrade(dodaj){
        this.ocenyPoDodaniu = [...this.ocenyPoDodaniu, ...dodaj];
        console.log(`Nowe oceny: ${dodaj}`);
        console.log(`Oceny po dodaniu: ${this.ocenyPoDodaniu}`);
    }
    wypiszDane(imie,wiek){
        console.log(`Imie: ${imie}`);
        console.log(`Wiek: ${wiek}`);
        console.log(`Oceny: ${this.oceny}`);
    }
    getAverage(){
        let a = this.oceny.reduce((acc, num) => acc + num, 0);
        let b = this.oceny.length   
        let srednia = a / b
        console.log(`Średnia ocen przed dodaniem ocen: ${srednia}`);

        let d = this.ocenyPoDodaniu.reduce((acc, num) => acc + num, 0);
        let e = this.ocenyPoDodaniu.length
        let srednia2 = d / e
        console.log(`Średnia ocen przed dodaniem ocen: ${srednia2}`);
    }
}

 const uczen = new student();
 uczen.wypiszDane("Karol", 17)
 uczen.addGrade([5,5,6])
 uczen.getAverage()