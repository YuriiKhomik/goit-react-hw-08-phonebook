import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { Box } from 'components/Box';
import { Contact } from 'components/ContactList/styled';
import { StyledListItem } from './ContactsListItem.styled';
import { DeleteButton } from 'components/Buttons/DeleteButton.styled';

export const ContactsListItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(item.id));
  return (
    <StyledListItem>
      <Contact>
        {item.name}: {item.number}
      </Contact>
      <DeleteButton type="button" onClick={handleDelete}>
        delete
      </DeleteButton>
    </StyledListItem>
  );
};
