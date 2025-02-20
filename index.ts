// function greet(name:string):
//     string{
//         return `hello ${name}`;
//     }


//     // console.log(greet("Abdullah"))



// interface Car{
//     brand: string,
//     model: string,
//     year: number
// }

// const myCar :Car ={
//     brand:"Toyota",
//     model: 'Stander',
//     year: 2023
// }
// console.log(myCar)


// class mCar{
//     brand:string;

//     constructor(brand:string){
//         this.brand = brand;
//     }

//     drive(){
//         console.log(`My car brand is ${this.brand}`)
//     }
// }

// const car1 = new mCar("Toyota");
// car1.drive()



//section1

//task 1

console.log("----------Section 1 / Task 1-----------")
function capitalizeWords(word: string): string {
    if (word) {
        return word.toUpperCase();
    } else {
        return "No text there";
    }
}
console.log(capitalizeWords("wordx"));

console.log("----------Section 1 / Task 2-----------")
//task 2
function isValidNumber(value: unknown): boolean {
    return typeof value === "number" && !isNaN(value);
}
console.log(isValidNumber(123));       
console.log(isValidNumber("123"));

//section 2
// task 3
console.log("----------Section 2 / Task 3-----------")


interface User{
    id:number,
    name:string,
    email:string,
    isAdmin:boolean
}

function createUser(user:User):string{
    return `User ${user.name} created successfully`;
}

const newUser: User={
    id:1,
    name:'Abdullah',
    email: "A@gmail.com",
    isAdmin: false

};

console.log(createUser(newUser))

console.log("----------Section 3 / Task 4-----------")

class Product {
   
    private name: string;
    private price: number;
    private category: string;

  
    constructor(name: string, price: number, category: string) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    
    public getDiscountedPrice(discount: number): number {
        if (discount < 0 || discount > 100) {
            throw new Error("Discount must be between 0 and 100");
        }
        return this.price - (this.price * discount) / 100;
    }

    public getProductDetails(): string {
        return `Product: ${this.name}, Price: $${this.price}, Category: ${this.category}`;
    }
}


const product1 = new Product("Laptop", 1000, "Electronics");

console.log(product1.getProductDetails()); 
console.log(`Discounted Price: $${product1.getDiscountedPrice(10)}`); 



console.log(createUser(newUser))

console.log("----------Section 4 / Task 5-----------")

interface User {
    id: number;
    name: string;
    email: string;
  }
  
  async function fetchUsers(): Promise<User[]> {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const users = (await response.json()) as User[]; 
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }
  
  // Example usage
  fetchUsers().then(users => console.log(users));
  


  console.log("----------Bonus Challenge -----------")

  const weakPasswords = ["password", "123456", "12345678", "qwerty", "abc123", "letmein", "12345", "123456789"];

  
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  
  async function isValidPassword(password: string): Promise<boolean> {
    console.log("Checking password, please wait...");
  
    await sleep(4000);
  
    if (password.length < 8) return false;
  
    
    if (!/[A-Z]/.test(password)) return false;
  
    if (!/[a-z]/.test(password)) return false;
  
    if (!/[0-9]/.test(password)) return false;
  
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;
  
    if (weakPasswords.includes(password.toLowerCase())) return false;
  
    return true;
  }
  
  isValidPassword("letmein").then(result => console.log(result)); 
  isValidPassword("StrongP@ss1").then(result => console.log(result)); 
  