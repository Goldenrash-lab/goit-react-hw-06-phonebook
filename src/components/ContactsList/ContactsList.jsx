import React from 'react';
import { DeleteBtn, ContactItem } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/contactsSlice';

export const ContactsList = () => {
  const { contacts, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(deleteContact(id));
  }
  function filteredContacts() {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  return (
    <ul>
      {filteredContacts().map(el => (
        <ContactItem key={crypto.randomUUID()}>
          <h4>
            {el.name}: {el.number}
          </h4>
          <DeleteBtn
            onClick={() => {
              handleDelete(el.id);
            }}
            type="button"
          >
            DELETE
          </DeleteBtn>
        </ContactItem>
      ))}
    </ul>
  );
};
