const johnDoe = { 
    firstName: 'John',
    lastName: 'Doe'
};

const janeDoe = { 
    firstName: 'Jane',
    lastName: 'Doe'
}

const objectsMerge = (...objArg) => {return Object.assign({},objArg)};

console.log(objectsMerge(johnDoe,janeDoe))

export default objectsMerge;
