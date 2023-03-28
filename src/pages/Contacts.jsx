import { PhonebookForm } from 'components/PhonebookForm';
import { ContactList } from 'components/ContactList';
import { Box } from 'components/Box';
import { Filter } from 'components/Filter';

const Contacts = () => {
  return (
    <Box p="4">
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </Box>
  );
};

export default Contacts;
