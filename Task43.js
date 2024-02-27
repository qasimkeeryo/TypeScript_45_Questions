var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
        modified_magicians.push("the Great ".concat(magician));
    }
    return modified_magicians;
}
var original_magicians = ['Magician-A', 'Magician-B', 'Magician-C', 'Magician-D'];
var great_magicians = make_great(__spreadArray([], original_magicians, true));
console.log("Original Magicians:");
show_magicians(original_magicians);
console.log("Great Magicians:");
show_magicians(great_magicians);
