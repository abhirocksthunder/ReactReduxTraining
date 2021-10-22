import React from "react";
import App from './App';
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";

const render = (initialEntries: any)=> mount(<MemoryRouter keyLength={0} initialEntries={initialEntries}><App /></MemoryRouter>);

describe('Card Component', ()=>{
    let sut: any;

    describe('when home page is rendered', () => {
        beforeEach(() => {
            sut = render(['/'])
        });

        it('should match home page snapshot', () => {
            expect(sut).toMatchSnapshot();
        })
    });

    describe('when not found page is rendered', () => {
        beforeEach(() => {
            sut = render(['/dfgsdff'])
        });

        it('should match not found page snapshot', () => {
            expect(sut).toMatchSnapshot();
        })
    });    
});