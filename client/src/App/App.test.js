import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";
import { create } from "react-test-renderer";
import * as renderer from 'react-test-renderer';
import questionsJson from '../../../Questions/Questions.json'
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