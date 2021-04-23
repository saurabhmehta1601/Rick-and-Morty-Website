import * as React from 'react'
import { mount } from "enzyme";
import Index from "../pages/index";

describe("Pages", () => {
  describe("Index", () => {
    it("should render without throwing error",()=>{ 
        const wrapper = mount(<Index/>)
        expect(wrapper.find('div').text()).toBe("Welcome to Nextjs")
    });
  });
});
