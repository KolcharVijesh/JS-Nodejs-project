const obj1 ={1: "a",2: "b"}
const obj2 ={3: "a",4: "b"}

const obj3={obj1,obj2}
//console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4=Object.assign({},obj1,obj2)
//console.log(obj4);

//Keys and Values 
const Mydetailes={
    name: "Vijesh",
    phone: 8431690538,
    email:"vijeh@gmail.com",
    Company:"Sphera",
    Designation:"Software Engineer"
}

console.log(Object.keys(Mydetailes));//   [ 'name', 'phone', 'email', 'Company', 'Designation' ]
console.log(Object.values(Mydetailes));// ['Vijesh',8431690538,'vijeh@gmail.com','Sphera','Software Engineer']
console.log(Object.entries(Mydetailes));// [[ 'name', 'Vijesh' ],[ 'phone', 8431690538 ],[ 'email', 'vijeh@gmail.com' ],[ 'Company', 'Sphera' ],[ 'Designation', 'Software Engineer' ]]

//hasOwnProperty()

console.log(Mydetailes.hasOwnProperty('Company'));//true //(method) Object.hasOwnProperty(v: PropertyKey): boolean
                                                         //Determines whether an object has a property with the specified name. 
