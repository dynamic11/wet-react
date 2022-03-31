import FormControl from '@components/Form/FormControl';
import OriginInputGroup from './InputGroup';
import InputGroupFeedback from './InputGroupFeedback';
import InputGroupText from './InputGroupText';

export type InputGroupProps = typeof OriginInputGroup & {
  Control: typeof FormControl;
  Text: typeof InputGroupText;
  Feedback: typeof InputGroupFeedback;
};

const InputGroup = OriginInputGroup as InputGroupProps;

InputGroup.Control = FormControl;
InputGroup.Text = InputGroupText;
InputGroup.Feedback = InputGroupFeedback;

export default InputGroup;
