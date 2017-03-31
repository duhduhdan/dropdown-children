import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {
  PlusMinusInput,
  Dropdown,
  DropdownTrigger,
  DropdownContent
} from '../components/organisms/organisms';

storiesOf('PlusMinusInput', module)
  .add('with rentals theme', () => (
    <PlusMinusInput
      label="Rooms"
      max={26}
      theme="rentals"
    />
  ))
  .add('with chcom theme', () => (
    <PlusMinusInput
      label="Rooms"
      max={26}
      theme="chcom"
    />
  ));

storiesOf('Dropdown', module)
  .add('dropdown', () => (
    <Dropdown>
      <DropdownTrigger>
        <button>Activate</button>
      </DropdownTrigger>
      <DropdownContent>
        <p>Foo</p>
      </DropdownContent>
    </Dropdown>
  ))
