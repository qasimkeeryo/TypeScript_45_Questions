function createCar(manufacturer, model) {
    var details = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        details[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, details_1 = details; _a < details_1.length; _a++) {
        var detail = details_1[_a];
        var key = Object.keys(detail)[0];
        car[key] = detail[key];
    }
    return car;
}
var carInfo = createCar('Toyota', 'Corolla', { color: 'Super White' }, { year: 2024 });
console.log(carInfo);
