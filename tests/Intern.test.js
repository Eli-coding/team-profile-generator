const Intern = require ("../lib/Intern")

describe("Intern", () => {
    test ("Getting the correct name.", ()=>{
        let example = new Intern ("Alyssa", 7, "alyssa@gmail.com", "NYU");
        expect(example.getName()).toBe("Alyssa");
    }) 

    test ("Getting the correct Id.", ()=>{
        let example = new Intern ("Alyssa", 7, "alyssa@gmail.com", "NYU");
        expect(example.getId()).toBe(7);
    }) 
    test ("Getting the correct email.", ()=>{
        let example = new Intern("Alyssa", 7, "alyssa@gmail.com", "NYU");
        expect(example.getEmail("alyssa@gmail.com")).toBe("alyssa@gmail.com");
    }) 
    test ("Getting the correct School.", ()=>{
        let example = new Intern("Alyssa", 7, "alyssa@gmail.com", "NYU");
        expect(example.getSchool("NYU")).toBe("NYU");
    }) 

    test ("Getting the correct Role.", ()=>{
        let example = new Intern("Alyssa", 7, "alyssa@gmail.com", "NYU");
        expect(example.getRole("Intern")).toBe("Intern");
    }) 
})