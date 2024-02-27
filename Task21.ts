let cars: { name: string, model: string, year: number, color: string} [] = [
    {name: "Toyata", model: "Corolla", year: 2024, color: "Super White" },
    {name: "Honda", model: "Civic", year: 2024, color: "Red Vine"}, 
    {name: "Suzuki", model: "Cultus", year: 2024, color: "Silver"}
];
cars.forEach(car => {
    console.log(`Car\`s name is ${car.name}`);
    console.log(`Car\`s model is ${car.model}`);
    console.log(`Car\`s year is ${car.year}`);
    console.log(`Car\`s color is ${car.color}`);
    console.log(`\n---------------------------------\n`);
});