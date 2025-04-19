let contacts = null;
document.addEventListener("DOMContentLoaded", () => {
  initializeContacts();
  displayContacts();
});

function initializeContacts() {
  let localStorageContacts = localStorage.getItem("contacts");
  console.log(`localStorageContacts: ${localStorageContacts}`);

  contacts = JSON.parse(localStorageContacts);
}

function displayContacts() {
  const contactsEmptyElement = document.getElementById("contactsEmpty");
  if (contactsEmptyElement) {
    contactsEmptyElement.style.display =
      contacts?.length > 0 ? "none" : "center";
  }

  const contactsContainer = document.getElementById("contacts");

  if (contactsContainer) {
    contacts?.forEach((contact) => {
      const contactElement = document.createElement("div");
      contactElement.classList.add("contact");
      let id = contact.id;
      let name = contact.name;
      let initial = name.charAt(0).toUpperCase();
      let phone = contact.phoneNumber;
      let position = contact.position;
      let company = contact.company;
      let email = contact.email;
      contactElement.innerHTML = `
         <div class="grid grid-cols-12 px-4 py-3 border-b border-gray-200 hover:bg-gray-50">
                    <div class="col-span-3 flex items-center gap-2">
                        <input type="checkbox" class="checkbox">
                        <div
                            class="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium">
                            ${initial}
                        </div>
                        <span class="font-medium">${name}</span>
                    </div>
                    <div class="col-span-3">${email}</div>
                    <div class="col-span-2 text-gray-700">${phone}</div>
                    <div class="col-span-2">${position}&${company}</div>
                    <div class="col-span-1"></div>
                    <div class="col-span-1 flex justify-end gap-1">
                        
                         <button onclick="deleteContact(${id})" class="h-8 w-8 rounded-full hover:bg-gray-100 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                              class="text-gray-400">
                              <path d="M3 6h18"></path>
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                          </svg>
                      </button>
                    
                        <button class="h-8 w-8 rounded-full hover:bg-gray-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="text-gray-400">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                        </button>
                        <button class="h-8 w-8 rounded-full hover:bg-gray-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="text-gray-400">
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                </polygon>
                            </svg>
                        </button>
                        <button class="h-8 w-8 rounded-full hover:bg-gray-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="text-gray-400">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="12" cy="5" r="1"></circle>
                                <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                        </button>
                       
                    </div>
                </div>
    `;
      contactsContainer.appendChild(contactElement);
    });
  }
}

function addContact() {
  let name =
    document.getElementById("first_nmae").value +
    " " +
    document.getElementById("last_name")?.value;
  let email = document.getElementById("email")?.value;
  let phone = document.getElementById("phoneNumber")?.value;
  let company = document.getElementById("company")?.value;
  let position = document.getElementById("position")?.value;

  if (
    !name.trim() &&
    !email.trim() &&
    !phone.trim() &&
    !company.trim() &&
    !position.trim()
  ) {
    alert("Harap Isi Salah Satu Form Untuk Melanjutkan");
    return;
  }

  if (contacts === null) {
    contacts = [];
    contacts.push({
      id: 1,
      name: name,
      email: email,
      phoneNumber: phone,
      company: company,
      position: position,
      isSelected: false,
      isStarred: false,
      labels: [],
    });
    localStorage.setItem("contacts", JSON.stringify(contacts));
    window.location.href = "index.html";
    return;
  }

  contacts.push({
    id: contacts.length + 1,
    name: name,
    email: email,
    phoneNumber: phone,
    company: company,
    position: position,
    isSelected: false,
    isStarred: false,
    labels: [],
  });
  localStorage.setItem("contacts", JSON.stringify(contacts));
  window.location.href = "index.html";
}

function searchContacts() {
  // ...
}

function deleteContact(id) {
  let value = prompt("Apa Yakin Kamu Ingin Menghapus Data Ini? (y/n)");
  if (value=='y') {
    contacts = contacts.filter((contact) => contact.id !== id);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    alert("Data Berhasil Dihapus");
    document.getElementById("contacts").innerHTML = "";
    displayContacts();
  } 
}

function updateContact() {
  // ...
}
