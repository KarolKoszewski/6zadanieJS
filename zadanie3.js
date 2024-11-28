class student{
    constructor(imie, wiek, oceny, dodaj,ocenyPoDodaniu){
        this.oceny = [1,2,3,4,5];
        this.dodaj = dodaj;
        this.ocenyPoDodaniu = [];

    }
    addGrade(dodaj){
        
        this.ocenyPoDodaniu = [...this.oceny, ...dodaj]
        console.log(`Oceny po dodaniu: ${this.ocenyPoDodaniu}`);
    }
    wypiszDane(imie,wiek){
        console.log(`Imie: ${imie}`);
        console.log(`Wiek: ${wiek}`);
        console.log(`Oceny: ${this.oceny}`);
    }
}
 const uczen = new student();
 uczen.wypiszDane("Karol", 17)
 uczen.addGrade(5)