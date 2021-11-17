import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { createTestStore, testRender } from '../test-utils';
import App from './App';

let store;
describe('App Component with API call', () => {
  beforeEach(() => {
    store = createTestStore();
  });
  test('Your component with a full reducer flow', async () => {
    // Create a redux store
    const { findByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    await findByText('Spain');
  });

  test('App snapshot test', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('App component without API call', () => {
  test('Shour render Spain not in the document', () => {
    testRender(<App />);
    const linkElement = screen.queryByText('Spain');
    expect(linkElement).not.toBe();
  });
});
