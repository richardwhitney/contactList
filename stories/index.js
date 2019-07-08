import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header';
import FilterControls from '../src/components/filterControls';
import Contact from '../src/components/contact/';
import ContactList from '../src/components/contactList/';
import { action } from "@storybook/addon-actions";
import PublicProfile from '../src/components/contactPublic/publicProfile';
import ContactPrivateDetails from '../src/components/contactPrivate/';

const sample = {
  gender: "female",
  name: {
    title: "mrs",
    first: "sofia",
    last: "gagné"
  },
  location: {
    street: "4459 22nd ave",
    city: "delisle",
    state: "yukon",
    postcode: "M3O 5T8",
    coordinates: {
      latitude: "-65.3384",
      longitude: "5.7232"
    },
    timezone: {
      offset: "-3:00",
      description: "Brazil, Buenos Aires, Georgetown"
    }
  },
  email: "sofia.gagné@example.com",
  login: {
    uuid: "e575704f-7425-4a46-9351-1c8883df8c5a",
    username: "bigbutterfly807",
    password: "franks",
    salt: "sitQqAvp",
    md5: "6ba3796b4ada40022882d952ec2b69c4",
    sha1: "1692278da10018f7f400dbf6faeee74b39fce8ec",
    sha256: "1e3b7af5552ed8436357e5a46dd78ca40673da8d2f4b9450808f6f73b7236dfa"
  },
  dob: {
    date: "1973-02-09T08:49:19Z",
    age: 46
  },
  registered: {
    date: "2010-11-07T18:55:04Z",
    age: 8
  },
  phone: "289-583-6562",
  cell: "223-771-0858",
  id: {
    name: "",
    value: null
  },
  picture: {
    large: "https://randomuser.me/api/portraits/women/49.jpg",
    medium: "https://randomuser.me/api/portraits/med/women/49.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/women/49.jpg"
  },
  nat: "CA"
}

storiesOf("Contact List App/Header", module).add("default", () =>(
  <Header noContacts={10}/>
));

storiesOf("Contact List App/Filter Controls", module).add("default", () => (
  <FilterControls onUserInput={action("Search criteria changes")}/>
));

storiesOf("Contact List App/Contact", module).add("default", () => (
  <Contact contact={sample} deleteHandler={action('Delete confirmed')}/>
));

storiesOf("Contact List App/Contact List", module).add("default", () => {
  const samples = [sample, sample, sample, sample, sample];
  return <ContactList contacts={samples}/>
});

storiesOf("Contact List App/Contact Page/PublicProfile", module).add("default", () => (
  <PublicProfile user={sample}/>
));

storiesOf("Contact List App/Contact Page/ContactPrivate", module).add("default", () => (
  <ContactPrivateDetails user={sample}/>
));
