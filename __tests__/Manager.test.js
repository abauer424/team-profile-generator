//name, id, email, getname(), getId(), getEmail(), getRole(), officeNumber
const Manager=require("../lib/Manager.js")
​
describe("Test Manager",()=>{
    describe("test all properties of manager",()=>{
         describe(" test email",()=>{
              const manager= new Manager("Phil",1,"phil@yahoo.com","232341")
               
          
              expect(manager.email).toEqual(expect.any(String))
              expect(manager.email).toEqual("phil@yahoo.com")
         })
​
         describe(" test id",()=>{
             
        })
        describe(" test name",()=>{
             
        })
​
        describe(" test office",()=>{
             
        })
    })
​
    describe("test all the methods of manager",()=>{
         describe("getname",()=>{
             const manager=new Manager("Chris",2,"chris@yahoo.com","234234")
             expect(manager.getName()).toEqual("Chris")
         })
​
         describe("getID",()=>{
            const manager=new Manager("Chris",2,"chris@yahoo.com","234234")
            expect(manager.getId()).toEqual(2)
        })
    })
})