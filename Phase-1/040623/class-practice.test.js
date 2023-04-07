const codeToTest = require('./class-practice');

// This test is simply to ensure that our testing is correctly set up.
test('Ensure test file is setup correct.', () => {
  expect(codeToTest.helloTests()).toBe("Hello Tests!");
});

// Object(class) Challenge Tests 
test('An Actor object should have a default health property of 100.', () => {
    let theActor = new codeToTest.Actor();
    expect(theActor.health).toBe(100);
});

test('An Actor object should have a default health property of 100, the 75 after taking damage.', () => {
    let theActor = new codeToTest.Actor();
    expect(theActor.health).toBe(100);
    theActor.damage(25);
    expect(theActor.health).toBe(75);
});

test('When health is above 0, isActive should be true.', () => {
    let theActor = new codeToTest.Actor();
    expect(theActor.isActive).toBe(true);
});

test('When health is at or bellow 0, isActive should be false.', () => {
    let theActor = new codeToTest.Actor();
    theActor.damage(100);
    expect(theActor.isActive).toBe(false);
});

test('An Actor should have a default name of "Unkown".', () => {
    let theActor = new codeToTest.Actor();
    expect(theActor.name).toBe("Unkown");
});

test('An Actor should be named "The Enemy" and not the default name.', () => {
    let theActor = new codeToTest.Actor("The Enemy");
    expect(theActor.name).toBe("The Enemy");
});