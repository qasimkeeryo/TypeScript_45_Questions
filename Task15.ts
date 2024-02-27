let guests: string[] = ['Mahad', 'Hammad', 'Taha'];
let xname: string = 'Qasim';
let theGuestToBeChanged: string = 'Taha';
let index: number = guests.indexOf(theGuestToBeChanged);
console.log(`Dear fellows, ${guests[index]} won\`t join us due to some emergency.`);
let newGuest: string = 'Abubakar';
console.log(`I would like to invite Mr ${newGuest} in place of ${guests[index]}.`);
if (index != -1){
    guests.splice(index, 1);
}
guests.push(newGuest);
for (let i = 0; i < guests.length; i++){
    console.log(`Dear ${guests[i]},\n\nYou are invited to dinner at my place. It would be an honor to have your presence.\n\nBest regards,\n${xname}\n---------------------------------------------\n`);
}