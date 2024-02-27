function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("A ".concat(size, "-sized shirt with the following print: \"").concat(message, "\"."));
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'Keep coding!');
