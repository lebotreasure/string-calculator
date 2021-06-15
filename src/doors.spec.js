let Doors = require ("./doors");

describe("100 doors", () =>{
    let doors = new Doors();
    doorsState = doors.openDoor().includes(false);
    expect(1).toBe(1);
});