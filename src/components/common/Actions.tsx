import { FC, MouseEvent } from 'react';
import styled from 'styled-components';

interface IProps {
  id: number;
  handleEditClick: (cardId: number) => void;
  handleDeletelick: (cardId: number) => void;
}

const Actions: FC<IProps> = ({ id, handleEditClick, handleDeletelick }) => {
  const onActionClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    switch (e.currentTarget.name) {
      case 'edit':
        return handleEditClick(id);

      case 'delete':
        return handleDeletelick(id);

      default:
        return;
    }
  };

  return (
    <ActionsStyled>
      <button type="button" name="edit" onClick={onActionClick}>
        <svg width="18" height="18">
          <use xlinkHref="/icons/sprite.svg#pencil" />
        </svg>
      </button>
      <button type="button" name="delete" onClick={onActionClick}>
        <svg width="20" height="20">
          <use xlinkHref="/icons/sprite.svg#trash" />
        </svg>
      </button>
    </ActionsStyled>
  );
};

export default Actions;

const ActionsStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
