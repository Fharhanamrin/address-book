function sayHello() {
    let name;
    if (!name) {
        throw Error("Name is required");
    }
}

try {
    sayHello();
} catch (error) {
    console.error("Sorry", error);
}

console.log("Continue...");