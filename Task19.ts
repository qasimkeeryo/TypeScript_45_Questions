let arr: string[] = ['Mahad', 'Hammad', 'Taha'];
let xname: string = 'Qasim';
for (let i = 0; i < arr.length; i++){
    console.log(`Dear ${arr[i]},\n\nYou are invited to dinner at my place. It would be an honor to have your presence.\n\nBest regards,\n${xname}\n---------------------------------------------\n`);
}
console.log(`Total number of guests:`, arr.length);