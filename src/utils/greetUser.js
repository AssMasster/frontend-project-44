import userName from '../cli.js';

export default function greetUser () {
    console.log('Welcome to the Brain Games!');
    const nameOfUser = userName();
    console.log('Hi, ' + nameOfUser + '!');
    return nameOfUser;
}
