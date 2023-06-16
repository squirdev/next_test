import styled from 'styled-components';

// interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> { }

export const Label = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  margin: 0 !important;
`;

export const Input = styled.input`
  box-sizing: border-box;
  border-radius: 2px;
  height: 150px;
  width: 100%;
  padding-left: 15px;
  border: 1px solid black;
  `;

export const TextArea = styled.textarea`
  box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid black;
  height: 150px;  
  width: 100%;
  padding-left: 15px;
  padding-top: 15px;
`;

export const Counter = styled.div`
  text-align: end;
`;
