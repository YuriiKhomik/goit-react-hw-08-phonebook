import { PhonebookForm } from 'components/PhonebookForm';
import { ContactList } from 'components/ContactList';
import { Box } from 'components/Box';
import { Filter } from 'components/Filter';

const Contacts = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box>
        <Box mt="45px" mb="40px">
          <PhonebookForm />
        </Box>
        <Filter />
      </Box>
      <Box mt="45px" ml="40px">
        <ContactList />
      </Box>
    </Box>
  );
};

export default Contacts;
