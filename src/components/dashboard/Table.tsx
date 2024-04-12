import { FC } from 'react';
import styled from 'styled-components';

import Actions from '../common/Actions';

const data = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Lorem ipsum dolor sit amet',
    assignee: 'Alice',
    dueDate: new Date(2023, 3, 10),
    status: 'open',
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Consectetur adipiscing elit',
    assignee: 'Bob',
    dueDate: new Date(2023, 3, 15),
    status: 'in progress',
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'Sed do eiusmod tempor incididunt',
    assignee: 'Charlie',
    dueDate: new Date(2023, 3, 18),
    status: 'completed',
  },
];

const Table: FC = () => {
  return (
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
        {data.map(item => (
          <tr key={item.id}>
            <TDataStyled>{item.title}</TDataStyled>
            <TDataStyled>{item.description}</TDataStyled>
            <TDataStyled>{item.assignee}</TDataStyled>
            <TDataStyled>{item.dueDate.toISOString()}</TDataStyled>
            <TDataStyled>{item.status}</TDataStyled>
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
