const user = {
    name: '',
    age: 0,
    isStudent: false,
    programmingLanguage: []
}

class Student {
    constructor(name,age,isStudent,skills){
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
        this.skills = skills;
    }

    addSkills ( skill) {
         this.skills.push(skill)
         return this.skills
    }
}

const user1 = new Student('Adrian', 29, false, ["JavaSript", "TypeScript","React"])
console.log(user1)
user1.addSkills('HTML')

console.log(user)

const addName = (user, name) => {
    return {...user, name: name}
}

const addAge = (user, age) => {return { ...user, age: age}}
const changeStudentStatus = (user, isStudent) => {
    return {
        ...user, isStudent: isStudent
    }
}

const addSkill = (user, skill) => {
    return {
        ...user, programmingLanguage: skill
    }
}

console.log(addName(user1, 'Roselyn'))
console.log(addAge(user1, 29))
console.log(changeStudentStatus(user1, true))
console.log(addSkill(user1, ['JavaScript', 'TypeScript']))

// Break and Continue in For Loop
// for ( let i = 1; i <= 5; i++) {
//     console.log(i)
//     if ( i === 3 ) break;
//     console.log(i)
// }

// Print 1-to-10 and 10-to-1
// for (let i = 1, j = 10; i <= 10, j >= 1; i++, j--) {
//     console.log(i,j)
// }

let counter = '';
for ( let i = 1; i <= 5; i++) {
   counter = counter + '*'
   console.log(counter)
}

let count = 1;
while(count <= 5){
    console.log(count)
    count++
}