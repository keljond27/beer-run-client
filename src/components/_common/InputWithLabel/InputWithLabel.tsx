import { FloatingLabel, Form } from 'react-bootstrap';

interface InputWithLabelProps {
  label: string;
  type?: string;
  placeholder?: string;
  onChange: () => void;
}

const InputWithLabel = (props: InputWithLabelProps) => {
  const { label, type, onChange } = props;

  const content = (
    <FloatingLabel
      controlId="floatingLabelInput"
      label={label}
      className="mb-3">
      <Form.Control type={type} placeholder="your@email.com" onChange={onChange}/>
    </FloatingLabel>
  )

  return (
    content
  );
}

export default InputWithLabel;