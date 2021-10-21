import React from 'react';
import Dashboard from './Dashboard';
import { storiesOf } from '@storybook/react';
import Provider from '../provider';




storiesOf('Products', module)
    .addDecorator(story => <Provider story={story()} />)
    .add('default', () => <Dashboard />);
