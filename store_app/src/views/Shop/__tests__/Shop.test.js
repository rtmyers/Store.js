import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { render, cleanup } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import Shop from '../';

afterEach(cleanup);

Enzyme.configure({ adapter: new Adapter() });

describe('Testing <Shop />', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Shop />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('<Shop /> displays list of <Item />', () => {
    const itemContain = getByTestId('itemContain');
    const shopContain = getByTestId('shopContain');
    const fakeContain = getByTestId('fakeContain');

    expect(shopContain).toContainElement(itemContain);
    expect(itemContain).not.toContainElement(shopContain);
    expect(shopContain).not.toContainElement(fakeContain);
  });
  /**
  it('should show the Shop <Items />', () => {
    const wrapper = mount(
      <UserContextProvider>
        <Shop />
      </UserContextProvider>
    );
    const promise = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          wrapper.update();
          resolve(wrapper);
        }, 3000);
      });
    };
    return promise().then((res: Enzyme.ReactWrapper<any>) => {
      expect(res.find('h1').text()).toEqual('Hello Bob Testman');
    });
  });
	**/
});
