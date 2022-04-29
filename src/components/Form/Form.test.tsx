import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '@components/Form';

describe('Form Tests', () => {
  describe('Form Check Tests', () => {
    test('disabled form check', () => {
      render(
        <Form>
          <Form.Check isDisabled type="checkbox" label="testTarget" />
        </Form>
      );
      expect(screen.getByRole('checkbox')).toHaveAttribute('disabled', '');
    });
    test('Enabled form check', () => {
      render(
        <Form>
          <Form.Check isDisabled={false} type="checkbox" label="testTarget" />
        </Form>
      );
      expect(screen.getByRole('checkbox')).not.toHaveAttribute('disabled');
    });
    test('form check type', () => {
      render(
        <>
          <Form>
            <Form.Check isDisabled={false} type="checkbox" label="testTarget" />
          </Form>
          <Form>
            <Form.Check type="radio" label="testTarget2" />
          </Form>
        </>
      );
      expect(
        screen.getByRole('checkbox').parentElement?.parentElement
      ).toHaveClass('checkbox');
      expect(
        screen.getByRole('radio').parentElement?.parentElement
      ).toHaveClass('radio');
    });
    test('Test default Form check type', () => {
      render(
        <Form>
          <Form.Check label="Target" />
        </Form>
      );
      expect(
        screen.getByRole('checkbox').parentElement?.parentElement
      ).toHaveClass('checkbox');
    });
    test('Test Invalid property', () => {
      render(
        <Form>
          <Form.Check isInvalid isRequired type="checkbox" label="TestTarget" />
        </Form>
      );
      expect(screen.getByRole('checkbox')).toHaveAttribute(
        'aria-invalid',
        'true'
      );
    });
    test('Test isRequired property', () => {
      render(
        <Form>
          <Form.Check isRequired type="radio" label="aTest" />
        </Form>
      );
      expect(screen.getByRole('radio')).toHaveAttribute(
        'aria-required',
        'true'
      );
    });
    test('Test required styling', () => {
      render(
        <Form>
          <Form.Check
            isRequired
            type="checkbox"
            showRequiredStyling
            label="target1"
          />
          <Form.Check
            isRequired
            type="checkbox"
            showRequiredStyling={false}
            label="target2"
          />
        </Form>
      );
      expect(
        screen.getAllByRole('checkbox').at(0)?.parentElement?.parentElement
      ).toHaveClass('required');
      expect(
        screen.getAllByRole('checkbox').at(1)?.parentElement?.parentElement
      ).not.toHaveClass('required');
    });
  });
  describe('FormGroup Tests', () => {
    test('Form Group is required test', () => {
      render(
        <Form>
          <Form.Group isRequired>
            <Form.CheckGroup label="Test target">
              <Form.Check
                type="checkbox"
                label="checkbox 1"
                showRequiredStyling={false}
              />
              <Form.Check
                type="checkbox"
                label="checkbox 2"
                showRequiredStyling={false}
              />
            </Form.CheckGroup>
          </Form.Group>
        </Form>
      );
      expect(
        screen.getAllByRole('checkbox').at(0)?.parentElement?.parentElement
          ?.parentElement
      ).toHaveClass('true');
    });
    test('Form Group is invalid test', () => {
      render(
        <Form>
          <Form.Group isInvalid isRequired>
            <Form.CheckGroup label="Test target">
              <Form.Check
                type="checkbox"
                label="checkbox 1"
                showRequiredStyling={false}
              />
              <Form.Check
                type="checkbox"
                label="checkbox 2"
                showRequiredStyling={false}
              />
            </Form.CheckGroup>
          </Form.Group>
        </Form>
      );
      expect(screen.getAllByRole('checkbox').at(0)).toHaveAttribute(
        'aria-invalid',
        'true'
      );
    });
    test('Form Group id test', () => {
      render(
        <Form>
          <Form.Group controlId="targeted" isRequired>
            <Form.CheckGroup label="Test target">
              <Form.Check
                type="checkbox"
                label="checkbox 1"
                showRequiredStyling={false}
              />
              <Form.Check
                type="checkbox"
                label="checkbox 2"
                showRequiredStyling={false}
              />
            </Form.CheckGroup>
          </Form.Group>
        </Form>
      );
      expect(
        screen.getAllByRole('checkbox').at(0)?.parentElement
      ).toHaveAttribute('for', 'targeted');
    });
  });
  describe('Form Control Tests', () => {
    describe('Form control types tests', () => {
      test('Email type', () => {
        render(
          <Form>
            <Form.Group>
              <Form.Control placeholder="test" type="email" />
            </Form.Group>
          </Form>
        );
        expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
      });
      test('button type', () => {
        render(
          <Form>
            <Form.Group>
              <Form.Control type="button" />
            </Form.Group>
          </Form>
        );
        expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
      });
      test('checkbox type', () => {
        render(
          <Form>
            <Form.Group>
              <Form.Control type="checkbox" />
            </Form.Group>
          </Form>
        );
        expect(screen.getByRole('checkbox')).toHaveAttribute(
          'type',
          'checkbox'
        );
      });
      test('color type', () => {
        const target = render(
          <Form>
            <Form.Group>
              <Form.Control type="color" />
            </Form.Group>
          </Form>
        );
        expect(target.container.querySelector('input')).toHaveAttribute(
          'type',
          'color'
        );
      });
      test('date type', () => {
        const target = render(
          <Form>
            <Form.Group>
              <Form.Control type="date" />
            </Form.Group>
          </Form>
        );
        expect(target.container.querySelector('input')).toHaveAttribute(
          'type',
          'date'
        );
      });
      test('datetime type', () => {
        const target = render(
          <Form>
            <Form.Group>
              <Form.Control type="datetime-local" />
            </Form.Group>
          </Form>
        );
        expect(target.container.querySelector('input')).toHaveAttribute(
          'type',
          'datetime-local'
        );
      });
      test('number type', () => {
        const target = render(
          <Form>
            <Form.Group>
              <Form.Control type="number" min={2} max={10} />
            </Form.Group>
          </Form>
        );
        expect(target.container.querySelector('input')).toHaveAttribute(
          'type',
          'number'
        );
        expect(target.container.querySelector('input')).toHaveAttribute(
          'min',
          '2'
        );
        expect(target.container.querySelector('input')).toHaveAttribute(
          'max',
          '10'
        );
      });
      test('file type', () => {
        const target = render(
          <Form>
            <Form.Group>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        );
        expect(target.container.querySelector('input')).toHaveAttribute(
          'type',
          'file'
        );
      });
      test('hidden type', () => {
        const target = render(
          <Form>
            <Form.Group>
              <Form.Control type="hidden" />
            </Form.Group>
          </Form>
        );
        expect(target.container.querySelector('input')).toHaveAttribute(
          'type',
          'hidden'
        );
      });
      test('image type', () => {
        const target = render(
          <Form>
            <Form.Group>
              <Form.Control type="image" />
            </Form.Group>
          </Form>
        );
        expect(target.container.querySelector('input')).toHaveAttribute(
          'type',
          'image'
        );
      });
      test('month type', () => {
        const target = render(
          <Form>
            <Form.Group>
              <Form.Control type="month" />
            </Form.Group>
          </Form>
        );
        expect(target.container.querySelector('input')).toHaveAttribute(
          'type',
          'month'
        );
      });
      test('number type', () => {
        const target = render(
          <Form>
            <Form.Group>
              <Form.Control type="number" />
            </Form.Group>
          </Form>
        );
        expect(target.container.querySelector('input')).toHaveAttribute(
          'type',
          'number'
        );
      });
      test('password type', () => {
        const target = render(
          <Form>
            <Form.Group>
              <Form.Control type="password" />
            </Form.Group>
          </Form>
        );
        expect(target.container.querySelector('input')).toHaveAttribute(
          'type',
          'password'
        );
      });
      test('radio type', () => {
        const target = render(
          <Form>
            <Form.Group>
              <Form.Control type="radio" />
            </Form.Group>
          </Form>
        );
        expect(target.container.querySelector('input')).toHaveAttribute(
          'type',
          'radio'
        );
      });
      test('range type', () => {
        const target = render(
          <Form>
            <Form.Group>
              <Form.Control type="range" />
            </Form.Group>
          </Form>
        );
        expect(target.container.querySelector('input')).toHaveAttribute(
          'type',
          'range'
        );
      });
      test('reset type', () => {
        const target = render(
          <Form>
            <Form.Group>
              <Form.Control type="reset" />
            </Form.Group>
          </Form>
        );
        expect(target.container.querySelector('input')).toHaveAttribute(
          'type',
          'reset'
        );
      });
      test('search type', () => {
        const target = render(
          <Form>
            <Form.Group>
              <Form.Control type="search" />
            </Form.Group>
          </Form>
        );
        expect(target.container.querySelector('input')).toHaveAttribute(
          'type',
          'search'
        );
      });
      test('submit type', () => {
        const target = render(
          <Form>
            <Form.Group>
              <Form.Control type="submit" />
            </Form.Group>
          </Form>
        );
        expect(target.container.querySelector('input')).toHaveAttribute(
          'type',
          'submit'
        );
      });
      test('tel type', () => {
        const target = render(
          <Form>
            <Form.Group>
              <Form.Control type="tel" />
            </Form.Group>
          </Form>
        );
        expect(target.container.querySelector('input')).toHaveAttribute(
          'type',
          'tel'
        );
      });
      test('text type', () => {
        const target = render(
          <Form>
            <Form.Group>
              <Form.Control type="text" />
            </Form.Group>
          </Form>
        );
        expect(target.container.querySelector('input')).toHaveAttribute(
          'type',
          'text'
        );
      });
      test('time type', () => {
        const target = render(
          <Form>
            <Form.Group>
              <Form.Control type="time" />
            </Form.Group>
          </Form>
        );
        expect(target.container.querySelector('input')).toHaveAttribute(
          'type',
          'time'
        );
      });
      test('url type', () => {
        const target = render(
          <Form>
            <Form.Group>
              <Form.Control type="url" />
            </Form.Group>
          </Form>
        );
        expect(target.container.querySelector('input')).toHaveAttribute(
          'type',
          'url'
        );
      });
      test('week type', () => {
        const target = render(
          <Form>
            <Form.Group>
              <Form.Control type="week" />
            </Form.Group>
          </Form>
        );
        expect(target.container.querySelector('input')).toHaveAttribute(
          'type',
          'week'
        );
      });
      test('default type', () => {
        const target = render(
          <Form>
            <Form.Group>
              <Form.Control />
            </Form.Group>
          </Form>
        );
        expect(target.container.querySelector('input')).toHaveAttribute(
          'type',
          'text'
        );
      });
    });
    describe('Non type tests', () => {
      test('placeholder text test', () => {
        render(
          <Form>
            <Form.Group>
              <Form.Control placeholder="test" type="email" />
            </Form.Group>
          </Form>
        );
        expect(screen.getByRole('textbox')).toHaveAttribute(
          'placeholder',
          'test'
        );
      });
      test('isInvalid Form control test', () => {
        render(
          <Form>
            <Form.Group>
              <Form.Control placeholder="test" isInvalid type="email" />
            </Form.Group>
          </Form>
        );
        expect(screen.getByRole('textbox')).toHaveAttribute(
          'aria-invalid',
          'true'
        );
      });
      test('readonly form control test', () => {
        render(
          <Form>
            <Form.Group>
              <Form.Control placeholder="test" isReadOnly type="email" />
            </Form.Group>
          </Form>
        );
        expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
      });
      test('isRequired Form control test', () => {
        render(
          <Form>
            <Form.Group>
              <Form.Control placeholder="test" isRequired type="email" />
            </Form.Group>
          </Form>
        );
        expect(screen.getByRole('textbox')).toHaveAttribute(
          'aria-required',
          'true'
        );
      });
      test('isDisabled Form Control test', () => {
        render(
          <Form>
            <Form.Group>
              <Form.Control placeholder="test" isDisabled type="email" />
            </Form.Group>
          </Form>
        );
        expect(screen.getByRole('textbox')).toHaveAttribute('disabled');
      });
      test('Form Control sm size test', () => {
        render(
          <Form>
            <Form.Group>
              <Form.Control placeholder="test" size="sm" type="email" />
            </Form.Group>
          </Form>
        );
        expect(screen.getByRole('textbox')).toHaveClass('input-sm');
      });
      test('Form Control htmlSize test', () => {
        render(
          <Form>
            <Form.Group>
              <Form.Control placeholder="test" htmlSize={6} type="email" />
            </Form.Group>
          </Form>
        );
        expect(screen.getByRole('textbox')).toHaveAttribute('size', '6');
      });
      test('Form Control lg size test', () => {
        render(
          <Form>
            <Form.Group>
              <Form.Control placeholder="test" size="lg" type="email" />
            </Form.Group>
          </Form>
        );
        expect(screen.getByRole('textbox')).toHaveClass('input-lg');
      });
      test('Form Control placeholder content test', () => {
        render(
          <Form>
            <Form.Group>
              <Form.Control placeholder="test" type="email" />
            </Form.Group>
          </Form>
        );
        expect(screen.getByRole('textbox')).toHaveAttribute(
          'placeholder',
          'test'
        );
      });
    });
  });
  describe('Form Label Tests', () => {
    test('Visually hidden Form label', () => {
      const target = render(
        <Form>
          <Form.Group>
            <Form.Label isVisuallyHidden>Email</Form.Label>
            <Form.Control placeholder="test" size="sm" type="email" />
          </Form.Group>
        </Form>
      );
      expect(target.container.querySelector('label')).toHaveClass(
        'visually-hidden'
      );
    });
    test('is required form label', () => {
      const target = render(
        <Form>
          <Form.Group>
            <Form.Label isRequired>Email</Form.Label>
            <Form.Control placeholder="test" size="sm" type="email" />
          </Form.Group>
        </Form>
      );
      expect(target.container.querySelector('label')).toHaveClass('required');
    });
    test('Form Label Hide required styling test', () => {
      const target = render(
        <Form>
          <Form.Group>
            <Form.Label isRequired showRequiredStyling={false}>
              Email
            </Form.Label>
            <Form.Control placeholder="test" size="sm" type="email" />
          </Form.Group>
        </Form>
      );
      expect(target.container.querySelector('label')).not.toHaveClass(
        'required'
      );
    });
    test('Form Label htmlfor prop', () => {
      const target = render(
        <Form>
          <Form.Group>
            <Form.Label htmlFor="testTarget" isRequired>
              Email
            </Form.Label>
            <Form.Control placeholder="test" size="sm" type="email" />
          </Form.Group>
        </Form>
      );
      expect(target.container.querySelector('label')).toHaveAttribute(
        'for',
        'testTarget'
      );
    });
    test('Form Label recieves id from group test', () => {
      const target = render(
        <Form>
          <Form.Group controlId="testTarget">
            <Form.Label isRequired>Email</Form.Label>
            <Form.Control placeholder="test" size="sm" type="email" />
          </Form.Group>
        </Form>
      );
      expect(target.container.querySelector('label')).toHaveAttribute(
        'for',
        'testTarget'
      );
    });
  });
  describe('FormSelect Tests', () => {
    test('Form Select isDisabled', () => {
      render(
        <Form>
          <Form.Select isDisabled>
            <option value="1">Testing</option>
            <option value="2">Forms</option>
          </Form.Select>
        </Form>
      );
      expect(screen.getByRole('combobox')).toHaveAttribute('disabled');
    });
    test('Form Select isInvalid', () => {
      render(
        <Form>
          <Form.Select isInvalid>
            <option value="1">Testing</option>
            <option value="2">Forms</option>
          </Form.Select>
        </Form>
      );
      expect(screen.getByRole('combobox')).toHaveAttribute(
        'aria-invalid',
        'true'
      );
    });
    test('Form Select isRequired', () => {
      render(
        <Form>
          <Form.Select isRequired>
            <option value="1">Testing</option>
            <option value="2">Forms</option>
          </Form.Select>
        </Form>
      );
      expect(screen.getByRole('combobox')).toHaveAttribute(
        'aria-required',
        'true'
      );
    });
    test('Form Select html size', () => {
      render(
        <Form>
          <Form.Select htmlSize={2}>
            <option value="1">Testing</option>
            <option value="2">Forms</option>
          </Form.Select>
        </Form>
      );
      expect(screen.getByRole('listbox')).toHaveAttribute('size', '2');
    });
    test('Form Select size prop', () => {
      render(
        <Form>
          <Form.Select size="sm">
            <option value="1">Testing</option>
            <option value="2">Forms</option>
          </Form.Select>
        </Form>
      );
      expect(screen.getByRole('combobox')).toHaveClass('input-sm');
    });
    test('Form Select invalid Size prop', () => {
      render(
        <Form>
          <Form.Select size="big">
            <option value="1">Testing</option>
            <option value="2">Forms</option>
          </Form.Select>
        </Form>
      );
      expect(screen.getByRole('combobox')).not.toHaveClass('input-sm');
      expect(screen.getByRole('combobox')).not.toHaveClass('input-lg');
    });
    test('Form Select lg size prop', () => {
      render(
        <Form>
          <Form.Select size="lg">
            <option value="1">Testing</option>
            <option value="2">Forms</option>
          </Form.Select>
        </Form>
      );
      expect(screen.getByRole('combobox')).toHaveClass('input-lg');
    });
  });
  describe('Form Text tests', () => {
    const placeholder = 'Some placeholder text to use in the following tests';
    test('Muted text test', () => {
      render(
        <Form>
          <Form.Text>{placeholder}</Form.Text>
        </Form>
      );
      expect(screen.getByText(placeholder)).toHaveClass('text-muted');
    });
    test('Form text not muted test', () => {
      render(
        <Form>
          <Form.Text isMuted={false}>{placeholder}</Form.Text>
        </Form>
      );
      expect(screen.getByText(placeholder)).not.toHaveClass('text-muted');
    });
  });
});
