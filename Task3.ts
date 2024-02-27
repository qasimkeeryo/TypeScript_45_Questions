let personName: string = 'muhammad qasim keeryo';
console.log("Upper Case:", personName.toUpperCase());
personName = 'MUHAMMAD QASIM KEERYO';
console.log("Lower Case:", personName.toLowerCase());
personName = 'MUHAMMAD QASIM KEERYO';
console.log("Upper Case:", toTitleCase(personName));
function toTitleCase(str: string): string{
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(' ');
}