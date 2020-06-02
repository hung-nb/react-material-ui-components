import React from 'react';
import { storiesOf } from '@storybook/react';
import { Loader } from '../components/OverlaySpinner';


storiesOf('OverlaySpinner', module).add('default', () => (
  <div>
    <div>Example</div>
    <Loader fullPage loading={true} text={'Searching...'} />
  </div>
));