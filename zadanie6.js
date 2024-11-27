const oceny = [1,2,3,4];

function najwieksza(){
    const max = Math.max(...oceny);
    console.log(`największa ocena to: `+max)
}
function najmniejsza(){
    const min = Math.min(...oceny);
    console.log(`najmniejsza ocena to: `+min)
}

najmniejsza();
najwieksza();