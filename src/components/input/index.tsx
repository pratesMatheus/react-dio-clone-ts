import { useForm, Controller } from "react-hook-form";

import {InputContainer, IconContainer, InputText, ErrorText} from './styles';
import { IInput } from "./types";

const Input = ({leftIcon, name, control, errorMessage, ...rest}: IInput) => {
  return (
    <>
      <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller 
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field: {value, onChange} }) => <InputText value={value} onChange={onChange}{...rest}/>}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
}

export { Input };