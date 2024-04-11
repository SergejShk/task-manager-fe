import { FC } from 'react';
import styled from 'styled-components';

import Table from './Table';
import { Button } from '../common/Button';

const Dashboard: FC = () => {
  return (
    <DashboardStyled>
      <Button type="button">Add task</Button>
      <Table />
    </DashboardStyled>
  );
};

export default Dashboard;

const DashboardStyled = styled.div`
  padding: 15px;
  border-radius: 4px;
  background-color: #fff;
`;
