import React from 'react';
import NewReleases from './NewReleases';
import { storiesOf } from '@storybook/react';
import Provider from '../provider';


storiesOf('Releases', module)
    .addDecorator(story => <Provider story={story()} />)
    .add('default', () => <NewReleases />);
