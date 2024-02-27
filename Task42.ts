function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let modified_magicians: string[] = [];
    for (let magician of magicians) {
        modified_magicians.push(`The Great ${magician}`);
    }
    return modified_magicians;
}

let magicians: string[] = ['Magician-A', 'Magician-B', 'Magician-C', 'Magician-D'];

let great_magicians = make_great(magicians);

show_magicians(great_magicians);