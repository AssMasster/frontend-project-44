import userName from '../cli.js';

export default function greetUser () {
    console.log('Welcome to the Brain Games!');
    const nameOfUser = userName();
    console.log('Hello, ' + nameOfUser + '!');
    return nameOfUser;
}
