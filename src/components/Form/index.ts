import OriginForm from './Form';
import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FormText from './FormText';
import FormControl from './FormControl';

export type FormProps = typeof OriginForm & {
  Group: typeof FormGroup;
  Label: typeof FormLabel;
  Control: typeof FormControl;
  Text: typeof FormText;
};

const Form = OriginForm as FormProps;

Form.Group = FormGroup;
Form.Label = FormLabel;
Form.Control = FormControl;
Form.Text = FormText;

export default Form;
