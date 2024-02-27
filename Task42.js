function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var modified_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        modified_magicians.push("The Great ".concat(magician));
    }
    return modified_magicians;
}
var magicians = ['Magician-A', 'Magician-B', 'Magician-C', 'Magician-D'];
var great_magicians = make_great(magicians);
show_magicians(great_magicians);
