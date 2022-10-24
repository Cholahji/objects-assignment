//exercise 1
    let address = {
    street : 'oni street',
    city : 'akowonjo',
    zipcode : 230876
}
function showAddress () {
for (let key in address)
 
 console.log(key, address[key])
}
showAddress()

//exercise 2a

function createAddress (street, city, zip) {
    return{ 
        street,
        city,
        zip,
    }
}
 
const address = createAddress('oni street', 'akowonjo', 230876 )
console.log(address)

// exercise 2b
function Createaddress (street, city, zip) {
    this.street = 'oni street'
    this.city = 'akowonjo'
    this.zip = 230876
}

const address = new Createaddress()

console.log(address)

//exercise 3.

const address1 =  new Createaddress()
const address2 =  new Createaddress()


// console.log(address1,address2)
function areEqual(){
    for(let key1 in address1){

        for(let key2 in address2){
            return (key1 === key2) ? true : false;

        }
    }
 
  
// }
// console.log(areEqual())


//b

function areSame(){
    return (address1 === address2) ? true : false
}
console.log(areSame())


//exercise 4.

const blogPost = {
    title : 'Javascript',
    author : 'oluwatobi Balogun',
    body : 'JavaScript is one of the 3 languages all web developers must learn',
    views : 50,
    comments : {
        act1: { author : 'Ronaldo',
                body : 'Manchester united',
        },
       
        act2: {author : 'Buhari',
            body : 'he has been a bad boy'
        }
    },
    isLive : true
}

console.log(blogPost)


//exercise 5 
let programming = {
    languages : ["Javascript", "Python", "Ruby"],
    isChallenging : true,
    isRewarding : true,
    difficulty : 8,
    jokes: "http;//stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
}
console.log(programming)

//i
programming.languages.push("go")

console.log(programming)

//ii

programming.difficulty = 7
console.log(programming)

//iii

delete programming.jokes

console.log(programming)


//iv
programming['isFun'] = true

console.log(programming)

//v
for (let language of Object.entries(programming.languages)) {
console.log(language); }

//vi
for (let key in programming) {
    console.log(key);
}

//vi
for (let key of Object.values(programming)){
    console.log(key)
}