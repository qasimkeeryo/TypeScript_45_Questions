let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("Congratulations! The player just earned 5 points for shooting the green alien.");
} 
else {
    console.log("Congratulations! The player just earned 10 points.");
}

alien_color = 'red';

if (alien_color === 'green') {
    console.log("Congratulations! The player just earned 5 points for shooting the green alien.");
} 
else {
    console.log("Congratulations! The player just earned 10 points for shooting some other alien.");
}