import { InputValue } from 'components/inputField/InputField';
import { useState } from 'react';

export type InputChangeHandler = (name: string, value: InputValue) => void;

interface IreturnProps {
  handleInputChange: InputChangeHandler;
}

export function useInputChange<T>(
  val: T,
): [T, IreturnProps['handleInputChange']] {
  const [input, setInput] = useState<T>(val);

  const handleInputChange = (name: string, value: InputValue) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  return [input, handleInputChange];
}
