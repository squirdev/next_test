import { ChangeEventHandler } from 'react';

type CheckboxProps = {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="checkmark"></span>
      <style jsx>{`
        label {
          display: inline-block;
          position: relative;
          padding-left: 15px;
          margin-right: 10px;
          margin-bottom: 12px;
          cursor: pointer;
          font-size: 16px;
          user-select: none;
        }

        input[type='checkbox'] {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 15px;
          width: 15px;
          border: 2px solid #23B154;
          border-radius: 1px;
        }

        input[type='checkbox']:checked ~ .checkmark {
          background-color: #23B154;
        }

        .checkmark:after {
          content: '';
          position: absolute;
          display: none;
        }

        input[type='checkbox']:checked ~ .checkmark:after {
          display: block;
        }

        .checkmark:after {
          left: 3px;
          top: 0;
          width: 5px;
          height: 9px;
          border: solid #fff;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
      `}</style>
    </label>
  );
};