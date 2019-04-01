import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
})

// Check component is receiving the following props
// rowsPerPage, page, data, handleChangePage, handleChangeRowsPerPage


it('render correctly Footer component', () => {  
    const FooterComponent = renderer.create(<Footer />).toJSON();
    expect(FooterComponent).toMatchSnapshot();
});