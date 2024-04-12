import { FC, useState } from 'react';
import styled from 'styled-components';

import { Button } from '../common/Button';
import Modal from '../common/Modal';

import Table from './Table';
import TaskForm from './TaskForm';

import { ITaskFormValues } from '../../interfaces/tasks';

const Dashboard: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onModalClose = () => setIsOpenModal(false);
  const onModalOpen = () => setIsOpenModal(true);

  const createTask = (formValues: ITaskFormValues) => {
    console.log('formValues', formValues);
  };

  return (
    <>
      <DashboardStyled>
        <Button type="button" onClick={onModalOpen}>
          Add task
        </Button>
        <Table />
      </DashboardStyled>

      {isOpenModal && (
        <Modal handleModalClose={onModalClose}>
          <TaskForm
            isLoading={false}
            handleSaveClick={createTask}
            handleCancelClick={onModalClose}
          />
        </Modal>
      )}
    </>
  );
};

export default Dashboard;

const DashboardStyled = styled.div`
  padding: 15px;
  border-radius: 4px;
  background-color: #fff;
`;
