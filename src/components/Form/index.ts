import OriginForm from './Form';
import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FormText from './FormText';
import FormControl from './FormControl';
import FormSelect from './FormSelect';
import FormCheck from './FormCheck';

export type FormProps = typeof OriginForm & {
  Group: typeof FormGroup;
  Label: typeof FormLabel;
  Control: typeof FormControl;
  Select: typeof FormSelect;
  Text: typeof FormText;
  Check: typeof FormCheck;
};

const Form = OriginForm as FormProps;

Form.Group = FormGroup;
Form.Label = FormLabel;
Form.Control = FormControl;
Form.Text = FormText;
Form.Select = FormSelect;
Form.Check = FormCheck;

export default Form;
