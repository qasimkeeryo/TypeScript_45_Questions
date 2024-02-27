var guests = ['Mahad', 'Hammad', 'Taha'];
var xname = 'Qasim';
var theGuestToBeChanged = 'Taha';
var index = guests.indexOf(theGuestToBeChanged);
console.log("Dear fellows, ".concat(guests[index], " won`t join us due to some emergency."));
var newGuest = 'Abubakar';
console.log("I would like to invite Mr ".concat(newGuest, " in place of ").concat(guests[index], "."));
if (index != -1) {
    guests.splice(index, 1);
}
guests.push(newGuest);
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ",\n\nYou are invited to dinner at my place. It would be an honor to have your presence.\n\nBest regards,\n").concat(xname, "\n---------------------------------------------\n"));
}
console.log("Dear fellows we have got a bigger dinner table so I would like to invite three more guests.");
var guest1 = 'Dawood';
var guest2 = 'Asif';
var guest3 = 'Shahzad';
guests.unshift(guest1);
guests.splice(((guests.length) / 2), 0, guest2);
guests.push(guest3);
console.log("New Invitaions\n------------------------------------------------\n");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ",\n\nYou are invited to dinner at my place. It would be an honor to have your presence.\n\nBest regards,\n").concat(xname, "\n---------------------------------------------\n"));
}
