function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let modified_magicians: string[] = [];
    for (let magician of magicians) {
        modified_magicians.push(`the Great ${magician}`);
    }
    return modified_magicians;
}

let original_magicians: string[] = ['Magician-A', 'Magician-B', 'Magician-C', 'Magician-D'];

let great_magicians: string[] = make_great([...original_magicians]);

console.log("Original Magicians:");
show_magicians(original_magicians);

console.log("Great Magicians:");
show_magicians(great_magicians);