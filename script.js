const contacts = [
  {
    id: 1,
    name: "Fharhan Amrin Bearmentor",
    age: 30,
    email: "fharhanbearmentor@gmail.com",
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
👤 ID: ${contact.id}
👤 Name: ${contact.name}
📧 Email: ${contact.email}
📞 Phone: ${contact.phone}
🎂 Age: ${contact.age} years old
📍 Address: ${contact.address}
`);
  }
}
