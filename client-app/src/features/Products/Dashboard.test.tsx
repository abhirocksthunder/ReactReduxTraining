import Products from './Dashboard';
import { mount } from 'enzyme';
import { Provider } from "react-redux";
import store from '../../store';

describe('Product Component', ()=>{
    
    let wrapper: any;    
   
    describe('with props',()=>{
        beforeEach(()=>{
            
            wrapper = mount(<Provider store={store}><Products /></Provider>)
        });

        it('+++ render the connected(SMART) component', () => {
            expect(wrapper.find(Products).length).toMatchSnapshot();
         });
    })
});

// import Products from './Dashboard';
// import { mount } from 'enzyme';
// import configureStore from 'redux-mock-store';
// import { ProductsList } from "../../store/productsStore";
// import { Provider } from "react-redux";



// describe('Product Component', ()=>{
//     const initialState = {
//         products : []
//     } as ProductsList
//     let store, wrapper: any;
//     //let wrapper: any;
//     const mockStore = configureStore();

//     describe('with props',()=>{
//         beforeEach(()=>{
//             store = mockStore(initialState);
//             wrapper = mount(<Provider store={store}><Products /></Provider>)
//         });

//         it('+++ render the connected(SMART) component', () => {
//             expect(wrapper.find(Products).length).toMatchSnapshot();
//          });
//     })
// });