# Address Book

Application to manage contacts.

Link: <https://address-book-8.fharhan.my.id>

## Features

- Contact List: Display a list of contacts with their names and essential details.
- Contact Details: Clicking on a contact should open a page displaying detailed information, including phone numbers, email addresses, and any additional notes.
- Add New Contact: Provide a form or interface to add new contacts with fields for name, phone number, email, address, and notes.
- Delete and Edit Contact: Allow users to delete and edit existing contact information.
- Search: Implement a search bar to quickly find contacts by name or other relevant details.

## Flows

Flowchart:

```mermaid
graph TD
    A[User visits homepage] --> B[Fetch contacts data]
    B --> C[Display contacts list]
    C --> D[Show name, email, phone for each contact]
    D --> E{User clicks contact?}
    E -->|Yes| F[Show detailed contact view]
    F --> G[Display all contact information]
    E -->|No| C
```

### Display all contacts

1. User visits the homepage.
2. User sees a list of contacts with their names and essential details (email & phone).
   - The contacts data is still an array of objects.
