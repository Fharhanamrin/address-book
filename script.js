const contacts = [
    {
        id: 1,
        name: "M Haidar Hanif",
        age: 30,
        email: "haidar@example.com",
        phone: "+62-851-0193029",
        address: "Bandung, Indonesia",
    },
    {
        id: 2,
        name: "Elon Musk",
        age: 50,
        email: "elon@example.com",
        phone: "+1-12121-0193029",
        address: "California, USA",
    },
];

function displayContacts() {
    for (let index = 0; index < contacts.length; index++) {
        const contact = contacts[index];

        console.log(`
ID: ${contact.id}
👤 Name: ${contact.name}
📧 Email: ${contact.email}
📞 Phone: ${contact.phone}
🎂 Age: ${contact.age} years old
📍 Address: ${contact.address}
`);
    }
}

function addContact(name, age, email, phone, address) {
    const lastContact = contacts[contacts.length - 1];
    const lastId = lastContact.id;
    const nextId = lastId + 1;

    contacts.push({
        id: nextId,
        name,
        age,
        email,
        phone,
        address,
    });
}

function searchContacts() {
    // ...
}

function deleteContact() {
    // ...
}


function updateContact() {
    // ...
}

addContact("Mark Zuck", 40, "mark@example.com", "+123", "Palo Alto, CA, USA");
addContact("Bill Gates", 60, "bill@example.com", "+123", "Seattle, WA, USA");
displayContacts();