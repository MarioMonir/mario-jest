const functions = require("./functions.js");

const initFunction = () => console.log("init function");
const exitFunction = () => console.log("end function");

// beforeEach(() => initFunction());
// afterEach(() => exitFunction());
// beforeAll(() => initFunction());
// afterAll(()=> exitFunction());

const nameCheck = () => console.log("checking name");

describe("checing names", () => {
    beforeEach(() => nameCheck());
    test("test user is mario", () => {
        const user = "mario";
        expect(user).toBe("mario");
    });

    test("test user is monir", () => {
        const user = "monir";
        expect(user).toBe("monir");
    });


});

/*
test("Adds 2 + 2 = 4  ", () => {
    expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 != 5  ", () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be null ", () => {
    expect(functions.isNull()).not.toBeTruthy();
});

test("Should be null ", () => {
    expect(functions.isNull()).toBeFalsy();
});

test("Should be null ", () => {
    expect(functions.isNull()).toBeNull();
});

test("Should be undefined ", () => {
    expect(functions.isUndefined()).toBeFalsy();
});

test("Should be undefined ", () => {
    expect(functions.isUndefined()).toBeUndefined();
});

test("Should be undefined ", () => {
    expect(functions.isUndefined()).toBeUndefined();
});

test("Should be greater than or equal 0 ", () => {
    expect(functions.checkValue(0.1)).toBeGreaterThanOrEqual(0);
});

test("Should be Mario Monir object ", () => {
    expect(500 + 600).toBeGreaterThanOrEqual(0);
});

test("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
});

test("admin should be in usernames", () => {
    expect(["mario", "monir", "admin"]).toContain("admin");
});

test("user fetched name should be Leanne Graham", () => {
    expect.assertions(1);
    return functions.fetchedUser().then((data) => {
        expect(data.name).toEqual("Leanne Graham");
    });
});

test("user fetched name should be Leanne Graham", async () => {
    expect.assertions(1);
    const data = await functions.fetchedUser();
    expect(data.name).toEqual("Leanne Graham");
});

*/

// ==================================================

const reverseString = require("./reverseString.js");

test("reverse string of Mario to be oiram", () => {
    expect(reverseString("Mario")).toBe("oiram");
});

const arrayChunk = require("./arrayChunk.js");

// ==================================================

test("[1,2,3,4,5,6] => [[1,2,3],[4,5,6]]", () => {
    expect(arrayChunk([1, 2, 3, 4, 5, 6], 3)).toEqual([
        [1, 2, 3],
        [4, 5, 6],
    ]);
});

test("[1,2,3,4,5,6,7,8,9,10] => [[1,2],[3,4],[5,6],[7,8],[9,10]]", () => {
    expect(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).toEqual([
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
        [9, 10],
    ]);
});

test("[1,2,3,4,5,6,7,8,9,10] => [[1,2,3,4,5,6,7,8,9,10]]", () => {
    expect(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0)).toEqual([
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    ]);
});

// ==================================================

const isAnagram = require("./isAnagram.js");

test(" below , elbow is anagram ", () => {
    expect(isAnagram("elbow", "below")).toBe(true);
});

test(" dirtyroom ++!@ , Dormitory is anagram ", () => {
    expect(isAnagram(" dirtyroom ++!@", "Dormitory")).toBe(true);
});

test(" cinema , iceman is anagram ", () => {
    expect(isAnagram(" cinema", "iceman")).toBe(true);
});

// ==================================================

// -> Check for truthy and falsy values
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined matches the oppiste of toBeUndefined
// toBeTruthy matches anything that an if statment treats as true
// toBeFalsy matches anything that an if statment treats as false

// -> check for numbers
// expect(value).toBeGreaterThan(3);
// expect(value).toBeGreaterThanOrEqual(3.5);
// expect(value).toBeLessThan(5);
// expect(value).toBeLessThanOrEqual(4.5);
// expect(value).toBe(0.3);         This won't work because of rounding error
// expect(value).toBeCloseTo(0.3);  This works.

// -> check for strings ( with reqular expression )
// expect('team').not.toMatch(/I/);
// expect('Christoph').toMatch(/stop/);

// -> check for Arrays and iterables
// expect(shoppingList).toContain('milk');
// expect(new Set(shoppingList)).toContain('milk');
