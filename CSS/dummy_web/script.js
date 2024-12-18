console.log("hello world");

//disc

const person = {
    firstName: 'soutam',
    age: 18,
    gender: 'male'
}
console.log(person.firstName);
console.log("hello again")

const {firstName} = person;
console.log(firstName);

person.email = 'rajbharsoutam@gmail.com';

console.log(person);

const todos = [
    {
        id : 1,
        text:'take out trash',
        isCompleted: true
    },
    {
        id : 2,
        text:'meeting with HR',
        isCompleted: true
    },
    {
        id : 3,
        text:'sleep',
        isCompleted: false
    }
];

console.log(todos[1].text)

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//loops (for)

for(let i =0;i<=5;i++){
    console.log('For loop number: '+i+' done');
}