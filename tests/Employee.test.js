const Employee = require("../lib/Employee")

describe("Employee", () => {
    test("Getting the correct name.", () => {
        let example = new Employee("Pepe", 5, "pepe@gmail.com");
        expect(example.getName()).toBe("Pepe");
    })

    test("Getting the correct Id.", () => {
        let example = new Employee("Pepe", 5, "pepe@gmail.com");
        expect(example.getId()).toBe(5);
    })

    test("Getting the correct email.", () => {
        let example = new Employee("Pepe", 5, "pepe@gmail.com");
        expect(example.getEmail()).toBe("pepe@gmail.com");
    })

    test("Getting the correct role.", () => {
        let example = new Employee("Pepe", 5, "pepe@gmail.com");
        expect(example.getRole()).toBe("Employee");
    })
})

