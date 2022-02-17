const Engineer = require("../lib/Engineer");

describe("Engineer", () => {

    test("Getting correct Name.", () => {
        let example = new Engineer("Sebastian", 9, "sebastian@gmail.com", "sBingley");
        expect(example.getName()).toBe("Sebastian");
    })

    test("Getting correct Id.", () => {
        let example = new Engineer("Sebastian", 9, "sebastian@gmail.com", "sBingley");
        expect(example.getId()).toBe(9);
    })

    test("Getting correct Email.", () => {
        let example = new Engineer("Sebastian", 9, "sebastian@gmail.com", "sBingley");
        expect(example.getEmail()).toBe("sebastian@gmail.com");
    })

    test("Getting correct GitHub.", () => {
        let example = new Engineer("Sebastian", 9, "sebastian@gmail.com", "sBingley");
        expect(example.getGithub()).toBe("sBingley");
    })
    test("Getting correct Role.", () => {
        let example = new Engineer("Sebastian", 9, "sebastian@gmail.com", "sBingley");
        expect(example.getRole()).toBe("Engineer");
    })
    
})