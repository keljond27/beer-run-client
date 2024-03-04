interface InputProps {
  handleOnChange: Function;
  name: string;
  value: string | readonly string[] | number | undefined;
}

export type Ref = HTMLInputElement;

const Input = (props: InputProps) => {

  const { handleOnChange, name, value } = props;

  const handleOnChangeFromParent = (e: React.SyntheticEvent) => {
    handleOnChange(e, { name, value: (e.target as HTMLInputElement).value });
  }

  return (
    <input onChange={handleOnChangeFromParent} value={value}/>
  )
}

export default Input;