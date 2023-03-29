import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { Box } from 'components/Box';
import { Contact } from 'components/ContactList/styled';
import { StyledListItem } from './ContactsListItem.styled';

export const ContactsListItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(item.id));
  return (
    <StyledListItem>
      <Contact>
        {item.name}: {item.number}
      </Contact>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </StyledListItem>
  );
};
