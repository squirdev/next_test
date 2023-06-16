import React, { FC, ReactElement } from "react";
import PropTypes from 'prop-types'
import { Label, Input, TextArea, Counter } from "./TextFieldStyle";

interface Props {
  id: any;
  label?: string;
  value?: any;
  name?: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  className?: string;
  min?: string;
  max?: string;
  maxLength?: number;
  multiline?: boolean;
  rows?: number;
  disabled?: boolean;
  characterCount?: boolean;
}

const TextField: FC<Props> = ({
  id,
  label = '',
  value = '',
  name = '',
  placeholder = '',
  onChange,
  required = false,
  className = '',
  min = '',
  max = '',
  maxLength = 50,
  multiline = false,
  rows = 2,
  disabled = false,
  characterCount = false
}: Props): ReactElement => {
  return (
    <div className={className}>
      <Label>{label}</Label>
      {!multiline ?
        (<>
          <Input
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            required={required}
            className={className}
            min={min}
            max={max}
            disabled={disabled}
          />
        </>) : (
          <TextArea
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            required={required}
            className={className}
            maxLength={maxLength}
            rows={rows}
          />
        )
      }
      {characterCount ? (
        <Counter>
          {value.length} / {maxLength}
        </Counter>
      ) : (
        ''
      )}
    </div>
  )
}

TextField.propTypes = {
  id: PropTypes.any,
  label: PropTypes.string,
  value: PropTypes.any,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  className: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  maxLength: PropTypes.number,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  characterCount: PropTypes.bool
};

export default TextField
