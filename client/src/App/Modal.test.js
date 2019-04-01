import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Modal />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('render correctly Modal component', () => {  
    const ModalComponent = renderer.create(<Modal />).toJSON();
    expect(ModalComponent).toMatchSnapshot();
});