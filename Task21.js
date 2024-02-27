var cars = [
    { name: "Toyata", model: "Corolla", year: 2024, color: "Super White" },
    { name: "Honda", model: "Civic", year: 2024, color: "Red Vine" },
    { name: "Suzuki", model: "Cultus", year: 2024, color: "Silver" }
];
cars.forEach(function (car) {
    console.log("Car`s name is ".concat(car.name));
    console.log("Car`s model is ".concat(car.model));
    console.log("Car`s year is ".concat(car.year));
    console.log("Car`s color is ".concat(car.color));
    console.log("\n---------------------------------\n");
});
