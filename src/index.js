import Person from './Person';

class Team {
  [Symbol.iterator]() {
    const person = ['Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie'];
    let i = 0;
    return {
      next() {
        if (i < person.length) {
          return { value: new Person(person[i++]), done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }
}
