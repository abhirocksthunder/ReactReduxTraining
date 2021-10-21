import React from 'react';
import Cards from './Cards';
import { ComponentStory, ComponentMeta, storiesOf } from '@storybook/react';

export default {
    title: 'Card',
    component: Cards,
} as ComponentMeta<typeof Cards>;

const Template: ComponentStory<typeof Cards> = (args)=> (<Cards {...args} />);

export const Primary = Template.bind({});

Primary.args={
    title: 'The start of New era',
    image:'https://api.androidhive.info/json/movies/shape_of_water.jpg',
    price:'₹ 130'
};

const withoutImageArgs = {
    title: 'The start of New era',
    image: '',    
    price:'₹ 130'
};

storiesOf('Card', module)
.add('withoutImage',()=> (<Cards {...withoutImageArgs} />))