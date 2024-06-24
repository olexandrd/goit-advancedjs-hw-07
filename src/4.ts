class Key { 
    private signature: number = Math.random();

    public getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {}

    public getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean;

    abstract comeIn(person: Person): void;
    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    constructor(private key: Key) {
        super();
    }
    private tenants: Person[] = [];

    public openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('Door is open');
        } else {
            console.log('Door is closed');
        }
    }

    public comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log('Welcome to house');
        } else {
            console.log('Door is closed');
        }
    }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};