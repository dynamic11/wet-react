import OriginInputGroup from './InputGroup';
import InputGroupText from './InputGroupText';

export type InputGroupProps = typeof OriginInputGroup & {
  Text: typeof InputGroupText;
};

const InputGroup = OriginInputGroup as InputGroupProps;

InputGroup.Text = InputGroupText;

export default InputGroup;
