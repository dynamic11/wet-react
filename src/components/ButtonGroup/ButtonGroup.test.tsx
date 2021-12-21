import React from 'react';
import { render } from '@testing-library/react';

import ButtonGroup from '@components/ButtonGroup';
import Button from '@components/Button';

describe('Button Group', () => {
  test('renders the ButtonGroup component', () => {
    render(
      <ButtonGroup>
        <Button>Hello world!</Button>
      </ButtonGroup>
    );
  });
});
