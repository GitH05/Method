/* Method is the function inside an object*/
function Message()
{
    return `${method.greet} my name is ${method.name}`
}

const method = {
    name:"Santosh",
    greet:"Namaste",
    Message    //passing the reference of the method
}
// console.log(person)
console.log(method.Message())