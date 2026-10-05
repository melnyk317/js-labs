'use strict';

const contacts = [
    { name: 'Anna', phone: '+380501234567' },
    { name: 'Sofia', phone: '+380671234567' },
    { name: 'Olena', phone: '+380931234567' }
];

const findPhoneByName = (name) => {
    for (const contact of contacts) {
        if (contact.name === name) {
            return contact.phone;
        }
    }
};

