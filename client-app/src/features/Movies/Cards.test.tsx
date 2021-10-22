import React from "react";
import Cards from './Cards';
import { shallow } from 'enzyme';

const render = (props: any) => shallow(<Cards {...props} />);

describe('Card Component', ()=>{
    let sut: any;
    let props ={
        id:"1",
        title:'Test1',
        image:'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
        price:"100"
    };
    let propsWithoutImages ={
        ...props, image:""
    };

    describe('with props',()=>{
        beforeEach(()=>{
            sut = render(props);
        });

        it('should match snapshot', ()=>{           
            expect(sut).toMatchSnapshot();
        });
    })

    describe('without image prop',()=>{
        beforeEach(()=>{
            sut = render(propsWithoutImages);
        });

        it('should match snapshot without image', ()=>{            
            expect(sut).toMatchSnapshot();
        });
    })
});