import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MockHexAccessorFactory} from "../gateway/mock/MockHexAccessorFactory";
import {MockTilesPort} from "../gateway/mock/MockTilesPort";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App hexagonAccessorFactory={MockHexAccessorFactory} tilesPort={MockTilesPort}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
