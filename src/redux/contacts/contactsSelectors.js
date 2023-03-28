import { selectFilter } from 'redux/filter/filterSelectors';
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
