import React from 'react';
import ReactDOM from 'react-dom';
import Questions from './Questions';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Questions />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('render correctly Questions component', () => {  
    const QuestionsComponent = renderer.create(<Questions />).toJSON();
    expect(QuestionsComponent).toMatchSnapshot();
});