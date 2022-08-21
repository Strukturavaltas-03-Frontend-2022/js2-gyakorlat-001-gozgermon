const taggedTemplate=(text,...values)=>
    text.map((text,index)=>`<em>${text}</em>${values[index] ? `<strong>${values[index]}</strong>` : ''}`).join('')
   //text.map((text)=>`<em>${text}<\em>`)
  // console.log(text.map((text,index)=>`<em>${text}</em>${values[index] ? `<strong>${values[index]}</strong>` : ''}`).join(''))


const user = {
    firstName: 'James',
    lastName: 'Bond',
    age: '30',
    nationality: 'American',
  };
let a=taggedTemplate`My name is ${user.firstName} ${user.lastName}, and I'm ${user.age} years old. I'm ${user.nationality}.`;
export default taggedTemplate;