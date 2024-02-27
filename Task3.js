var personName = 'muhammad qasim keeryo';
console.log("Upper Case:", personName.toUpperCase());
personName = 'MUHAMMAD QASIM KEERYO';
console.log("Lower Case:", personName.toLowerCase());
personName = 'MUHAMMAD QASIM KEERYO';
console.log("Upper Case:", toTitleCase(personName));
function toTitleCase(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(' ');
}
