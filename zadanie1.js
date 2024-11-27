
const processText = (text, { uppercase = false, reverse = false, removeSpecialChars = false } = {}) =>{
    if(uppercase == true){
        text = text.toUpperCase();
    }
    if(reverse == true){
        text = text.split('').reverse().join('')
    }
    if(removeSpecialChars == true){
        text = text.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '')
    }
    console.log(`twój tekst po zmianach: ${text}`)
} 

processText('Hello world!', { uppercase: true,reverse: true ,removeSpecialChars: true });