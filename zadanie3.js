// function student(imie,wiek,oceny){
//     console.log(`Imie ucznia: ${imie}`);
//     console.log(`wiek ucznie: ${wiek}`);
//     console.log(`Oceny ucznia: ${oceny}`);
    
//     const sum = oceny.reduce((acc, num) => acc + num, 0);
//     const dlugoscArray = oceny.length
//     const srednia = sum / dlugoscArray

//     console.log(`srednia ocen ucznia ${imie} to: ${srednia}`)

    
// }

// let a = "Karol";
// let b = 18;
// const ocena = [1,3,2,2,5];
// student(a,b,ocena)


// const dodajOcena = [2,10,20,4,5]; //uzytkownik inputem dodwalby tu oceny
// const ocenyPoDodaniu = [...ocena,...dodajOcena];
// student(a,b,ocenyPoDodaniu)

class student{
    constructor(imie, wiek, oceny, dodaj,ocenyPoDodaniu){
        this.oceny = [1,2,3,4,4,4];
        this.dodaj = [];
        this.ocenyPoDodaniu = [];

    }
    addGrade(dodaj){
        dodaj = [a,b];
        ocenyPoDodaniu = [...this.oceny, ...dodaj]
    }
}