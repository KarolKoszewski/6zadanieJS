function student(imie,wiek,oceny){
    console.log(`Imie ucznia: ${imie}`);
    console.log(`wiek ucznie: ${wiek}`);
    console.log(`Oceny ucznia: ${oceny}`);

    const sum = oceny.reduce((acc, num) => acc + num, 0);
    const dlugoscArray = oceny.length
    const srednia = sum / dlugoscArray

    console.log(`srednia ocen ucznia ${imie} to: ${srednia}`)
}

let a = "Karol";
let b = 18;
const ocena = [1,3,2,2,5];
student(a,b,ocena)