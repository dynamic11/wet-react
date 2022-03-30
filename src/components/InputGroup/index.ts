import OriginInputGroup from './InputGroup';
import FormControl from './FormControl';
import InputGroupText from './InputGroupText';

export type InputGroupProps = typeof OriginInputGroup & {
  Control: typeof FormControl;
  Text: typeof InputGroupText;
};

const InputGroup = OriginInputGroup as InputGroupProps;

InputGroup.Control = FormControl;
InputGroup.Text = InputGroupText;

export default InputGroup;
