function createCar(manufacturer: string, model: string, ...details: { [key: string]: any }[]): Record<string, any> {
    let car: Record<string, any> = {
        manufacturer: manufacturer,
        model: model
    };

    for (let detail of details) {
        let key = Object.keys(detail)[0];
        car[key] = detail[key];
    }

    return car;
}

let carInfo = createCar('Toyota', 'Corolla', { color: 'Super White' }, { year: 2024 });

console.log(carInfo);