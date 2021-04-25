import * as React from 'react'
import { mount } from "enzyme";
import Index from "../pages/index";

describe("<Index/>", () => {

  const wrapper = mount(<Index/>)

  it("renders without crashing",()=>{
    expect(wrapper.find('[data-testid="heading"]').text()).toBe("Welcome to Nextjs")
  })

})