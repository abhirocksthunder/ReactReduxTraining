import NewReleases from './NewReleases';
import { mount } from 'enzyme';
import { Provider } from "react-redux";
import store from '../../store';


describe('Product Component', ()=>{
    
    let wrapper: any;    
   
    describe('with props',()=>{
        beforeEach(()=>{
            
            wrapper = mount(<Provider store={store}><NewReleases /></Provider>)
        });

        it('+++ render the connected(SMART) component', () => {
            expect(wrapper.find(NewReleases).length).toMatchSnapshot();
         });
    })
});
