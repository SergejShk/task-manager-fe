import { FC } from 'react';
import Select, { Props } from 'react-select';
import styled from 'styled-components';

interface IProps extends Props {
  label: string;
}

const InputSelect: FC<IProps> = ({ label, ...props }) => {
  return (
    <SelectWrapper>
      <Label>
        {!!label && <span>{label}</span>}
        <Select classNamePrefix="customSelect" {...props} />{' '}
      </Label>
    </SelectWrapper>
  );
};

export default InputSelect;

const SelectWrapper = styled.div`
  width: 100%;

  .customSelect__control {
    cursor: pointer;
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

    &:hover,
    &:focus {
      border: 1px solid #6b7fca;
    }
  }

  .customSelect__control--is-focused {
    box-shadow: none;
  }

  .customSelect__option:hover {
    background-color: #b4c0ee;
  }

  .customSelect__option--is-selected {
    background-color: #6b7fca;
  }

  .customSelect__value-container {
    padding: 0;
  }

  .customSelect__single-value {
    white-space: normal;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    color: #000;
  }

  .customSelect__indicators,
  .customSelect__indicator-separator {
    display: none;
  }

  .customSelect__menu,
  .customSelect__menu-list {
    width: 500px;
  }

  .customSelect__option {
    cursor: pointer;
    font-family: Inter;
    font-size: 16px;
  }

  .customSelect__input-container {
    margin: 0;
    padding: 0;
  }
`;

const Label = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 18px;
  font-weight: 500;
  line-height: 0.9;
  color: #484848;
`;
