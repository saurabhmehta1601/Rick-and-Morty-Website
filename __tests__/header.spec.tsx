import * as React from 'react'
import Header from "../components/Header"
import {mount} from "enzyme"


describe('Header', () => {

    it("renders site title",()=>{
        const wrapper = mount(<Header/>)
        expect(wrapper.find('[data-testid="header-title"]').text()).toBe("Rick And Morty") 
    })

    it("renders site logo",()=>{
       const wrapper = mount(<Header/>)
       expect(wrapper.find('[data-testid="site-logo"]').exists()).toBeTruthy()
    })

})