import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";
import { create } from "react-test-renderer";
import * as renderer from 'react-test-renderer';
import questionsJson from '../../../JSON/Questions.json'
import { mount } from 'enzyme';
import * as Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('render correctly App component', () => {  
  const AppComponent = renderer.create(<App />).toJSON();
  expect(AppComponent).toMatchSnapshot();
});

jest.mock("axios");
describe("App component", () => {
  it("shows a list of Questions", async () => {
    const response = questionsJson
    axios.get.mockResolvedValue(response);
    const component = create(<App />);
    const instance = component.getInstance();
    await instance.componentDidMount();
  });
});

it('correct props are  being passed', () => {  
  const wrapper = mount(<App includedProp="Success!" excludedProp="I'm not included" />);
  expect(wrapper.props().includedProp).toEqual('Success!');
});
  