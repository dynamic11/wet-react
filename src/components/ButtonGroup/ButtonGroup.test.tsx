import React from 'react';
import { render } from '@testing-library/react';

import ButtonGroup from './ButtonGroup';
import { Button } from '..';

describe('Button Group', () => {
  test('renders the ButtonGroup component', () => {
    render(
      <ButtonGroup>
        <Button>Hello world!</Button>
      </ButtonGroup>
    );
  });
});
