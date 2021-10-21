import React from "react";
import Cards from './Cards';
import { render } from '@testing-library/react';

describe('Card Component', ()=>{
    let sut;
    let props ={
        id:"1",
        title:'Test1',
        image:'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
        price:"100"
    };
    let propsWithoutImages ={
        ...props, image:""
    };

    it('should match snapshot', ()=>{
        sut = render(<Cards {...props}/>);
        expect(sut).toMatchSnapshot();
    });

    it('should match snapshot without image', ()=>{
        sut = render(<Cards {...propsWithoutImages}/>);
        expect(sut).toMatchSnapshot();
    });
});