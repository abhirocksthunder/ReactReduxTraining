import React from "react";
import App from './App';
import { render, screen } from '@testing-library/react';

describe('Card Component', ()=>{
    let sut;
    let props;
   

    it('should render', ()=>{
        sut = render(<App />);
        const linkElement = screen.getByText(/welcome/i);
        expect(linkElement).toBeInTheDocument();
    });

    
});