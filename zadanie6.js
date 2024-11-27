const oceny = [1,2,3,4];
const arrayLength = oceny.length;

function najwieksza(){
    const max = Math.max(...oceny);
    console.log(`największa ocena to: `+max)
}
function najmniejsza(){
    const min = Math.min(...oceny);
    console.log(`najmniejsza ocena to: `+min)
}
function srednia(){
    const sum = oceny.reduce((acc,num) => acc + num, 0);
    const srednia = sum / arrayLength
    console.log(`Średnia ocen wynosi: `+ srednia)
}
najmniejsza();
najwieksza();
srednia();