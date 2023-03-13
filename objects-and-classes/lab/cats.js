function solve(catsArr) {
    
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;          
        }

        meow() {
                console.log(`${this.name}, age ${this.age} says Meow`);
            }
    }
    
    for (const line of catsArr) {
        let [ name, age ] = line.split(' ');
        let catObj = new Cat(name, age);
        catObj.meow();
    }
}

solve(['Mellow 2', 'Tom 5']);
solve(['Candy 1', 'Poppy 3', 'Nyx 2']);