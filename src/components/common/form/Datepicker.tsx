import { FC } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';

import 'react-datepicker/dist/react-datepicker.css';

interface IProps {
  name?: string;
  label?: string;
  value?: Date | null;
  onChangeValue: (value: Date | null) => void;
  disabled?: boolean;
}

const Datepicker: FC<IProps> = ({
  name,
  label,
  value,
  onChangeValue,
  disabled,
}) => {
  return (
    <DatepickerStyled>
      <Label>
        {!!label && <span>{label}</span>}

        <DatePicker
          id={name}
          name={name}
          dateFormat="dd/MM/yyyy"
          selected={value}
          onChange={date => onChangeValue(date)}
          autoComplete="off"
          disabled={disabled}
        />
      </Label>
    </DatepickerStyled>
  );
};

export default Datepicker;

const DatepickerStyled = styled.div`
  width: 100%;

  .react-datepicker-wrapper {
    width: 100%;
    margin-top: 12px;
  }

  input {
    width: 100%;
    min-height: 44px;
    border-radius: 4px;
    border: 1px solid #6b7fca;
    background-color: #fff;
    font-size: 18px;
    line-height: normal;
    letter-spacing: 0.72px;
    color: #484848;
    outline: none;
    padding: 10px;
  }

  .react-datepicker {
    border: 1px solid #6b7fca;
    overflow: hidden;
  }

  .react-datepicker__header {
    background-color: #b4c0ee;
    border-radius: 0;
    border-bottom: 1px solid #6b7fca;
  }

  .react-datepicker__navigation:hover *::before,
  .react-datepicker__navigation-icon::before {
    border-color: #484848;
  }

  .react-datepicker__day:hover,
  .react-datepicker__day--selected {
    background-color: #6b7fca;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #b4c0ee;
  }

  .react-datepicker__triangle {
    display: none;
  }
`;

const Label = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 500;
  line-height: 0.9;
  color: #484848;
`;
