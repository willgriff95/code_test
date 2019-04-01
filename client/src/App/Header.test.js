import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
})


it('render correctly Header component', () => {  
    const HeaderComponent = renderer.create(<Header />).toJSON();
    expect(HeaderComponent).toMatchSnapshot();
});