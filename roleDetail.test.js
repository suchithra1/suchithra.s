import React from 'react';
import ReactDOM from 'react-dom';
import RoleDetail from './roleDetail.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RoleDetail/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
