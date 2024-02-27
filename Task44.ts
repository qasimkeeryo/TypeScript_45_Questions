function makeSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    } 
    else {
        console.log("You ordered a sandwich with the following items:");
        for (let item of items) {
            console.log(`- ${item}`);
        }
    }
    console.log("------------------------------------");
}

makeSandwich('Cheese', 'Tomato', 'Lettuce');
makeSandwich('Turkey', 'Bacon');
makeSandwich('Peanut Butter', 'Jelly');