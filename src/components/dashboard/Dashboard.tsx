import { FC, useState } from 'react';
import styled from 'styled-components';

import Table from './Table';
import { Button } from '../common/Button';
import Modal from '../common/Modal';

const Dashboard: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onModalClose = () => setIsOpenModal(false);
  const onModalOpen = () => setIsOpenModal(true);

  return (
    <>
      <DashboardStyled>
        <Button type="button" onClick={onModalOpen}>
          Add task
        </Button>
        <Table />
      </DashboardStyled>

      {isOpenModal && <Modal handleModalClose={onModalClose}>Modal</Modal>}
    </>
  );
};

export default Dashboard;

const DashboardStyled = styled.div`
  padding: 15px;
  border-radius: 4px;
  background-color: #fff;
`;
