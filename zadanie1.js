
const processText = (text, { uppercase = false, reverse = false, removeSpecialChars = false } = {}) =>{
    if(uppercase == true){
        text = text.toUpperCase();
    }
    
    console.log(`twój tekst po zmianach: ${text}`)
} 

processText('Hello world!', { uppercase: true,reverse: true ,removeSpecialChars: true });