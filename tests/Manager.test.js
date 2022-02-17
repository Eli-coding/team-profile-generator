const Manager = require ( "../lib/Manager") ;

describe("Manager", () =>{
    test ("Getting the correct Name.", ()=>{
        let example = new Manager ("Luisa", 4, "luisa@gmail.com", 297);
        expect(example.getName()).toBe("Luisa");
    }) 

    test ("Getting the correct Id.", ()=>{
        let example = new Manager ("Luisa", 4, "luisa@gmail.com", 297);
        expect(example.getId()).toBe(4);
    }) 

    test ("Getting the correct Email.", ()=>{
        let example = new Manager ("Luisa", 4, "luisa@gmail.com", 297);
        expect(example.getEmail()).toBe("luisa@gmail.com");
    }) 

    test ("Getting the correct Office Number.", ()=>{
        let example = new Manager ("Luisa", 4, "luisa@gmail.com", 297);
        expect(example.getOfficeNumber()).toBe(297);
    }) 

    test("Getting the correct Role.", () => {
        let example = new Manager("Luisa", 4, "luisa@gmail.com", 297);
        expect(example.getRole()).toBe("Manager")
    })
})
