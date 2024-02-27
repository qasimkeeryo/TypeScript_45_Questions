function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`A ${size}-sized shirt with the following print: "${message}".`);
}

make_shirt();

make_shirt('Medium');

make_shirt('Small', 'Keep coding!');