import SectionName from 'components/SectionName';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

export default function PhoneBookPage() {
  return (
    <>
      <SectionName title="Add contact" />
      <ContactForm />
      <SectionName title="Contacts" />
      <Filter />
      <ContactList />
    </>
  );
}
