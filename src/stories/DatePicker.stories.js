import React from 'react';
import { storiesOf } from '@storybook/react';

import DatePicker from '../components/DatePicker';

export const onDateChange = () => {};

storiesOf('DatePicker', module).add('default', () => (
  <DatePicker onDateChange={onDateChange} />
));
