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
console.log(`Dear fellows we have got a bigger dinner table so I would like to invite three more guests.`);
let guest1: string = 'Dawood';
let guest2: string = 'Asif';
let guest3: string = 'Shahzad';
guests.unshift(guest1);
guests.splice(((guests.length + 1) / 2), 0, guest2);
guests.push(guest3);
console.log(`New Invitaions\n------------------------------------------------\n`);
for (let i = 0; i < guests.length; i++){
    console.log(`Dear ${guests[i]},\n\nYou are invited to dinner at my place. It would be an honor to have your presence.\n\nBest regards,\n${xname}\n---------------------------------------------\n`);
}
console.log(`The new table won\`t arrive in time and we have space for only two guests.`);
while (guests.length > 2){
    let removed = guests.pop();
    console.log(`Sorry Mr. ${removed}, we have to cancel your invitation !`);
}
console.log(`Remaining Invitaions\n------------------------------------------------\n`);
for (let i = 0; i < guests.length; i++){
     console.log(`Mr ${guests[i]}, You are still invited.\n---------------------------------------------\n`);
}
while (guests.length > 0){
    guests.pop();
}
console.log(`Final Array: ${guests}`);