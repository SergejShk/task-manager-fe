import { FC } from 'react';
import styled from 'styled-components';

import Actions from '../common/Actions';

import { statusValue } from '../../utils/constants';

import { ITask } from '../../interfaces/tasks';
import Loader from '../common/Loader';

interface IProps {
  tasks: ITask[];
  isLoading: boolean;
}

const Table: FC<IProps> = ({ tasks, isLoading }) => {
  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && (
        <TableStyled>
          <THeadStyled>
            <tr>
              <THeaderStyled $width="20%">Title</THeaderStyled>
              <THeaderStyled $width="25%">Description</THeaderStyled>
              <THeaderStyled $width="20%">Assignee</THeaderStyled>
              <THeaderStyled $width="20%">Due Date</THeaderStyled>
              <THeaderStyled $width="10%">Status</THeaderStyled>
              <THeaderStyled $width="5%"></THeaderStyled>
            </tr>
          </THeadStyled>

          <tbody>
            {tasks.length > 0 &&
              tasks.map(item => (
                <tr key={item.id}>
                  <TDataStyled>{item.title}</TDataStyled>
                  <TDataStyled>{item.description}</TDataStyled>
                  <TDataStyled>{item.assignee}</TDataStyled>
                  <TDataStyled>
                    {item.dueDate
                      ? new Date(item.dueDate).toLocaleDateString()
                      : ''}
                  </TDataStyled>
                  <TDataStyled>{statusValue[item.status]}</TDataStyled>
                  <TDataStyled>
                    <Actions
                      id={item.id}
                      handleEditClick={() => {}}
                      handleDeletelick={() => {}}
                    />
                  </TDataStyled>
                </tr>
              ))}
          </tbody>
        </TableStyled>
      )}
    </>
  );
};

export default Table;

const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
`;

const THeadStyled = styled.thead`
  border-bottom: 2px solid #6b7fca;
`;

const THeaderStyled = styled.th<{ $width: string }>`
  text-align: left;
  padding: 5px;
  width: ${({ $width }) => $width};
`;

const TDataStyled = styled.td`
  text-align: left;
  vertical-align: top;
  padding: 5px;
`;
