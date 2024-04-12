import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button } from '../common/Button';
import Modal from '../common/Modal';

import Table from './Table';
import TaskForm from './TaskForm';

import { useTasksList } from '../../hooks/services/tasks/useTasksList';
import { useCreateTask } from '../../hooks/services/tasks/useCreateTask';

import { normalizeCreateTaskBody } from '../../utils/tasks';

import { ITaskFormValues } from '../../interfaces/tasks';

const Dashboard: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { data: tasks, isFetching, refetch } = useTasksList();
  const {
    mutate: mutateCreateTask,
    error: errorCreateTask,
    isPending: isPendingCreateTask,
    isSuccess: isSuccessCreateTask,
  } = useCreateTask();

  useEffect(() => {
    if (isSuccessCreateTask) {
      refetch();
      onModalClose();
    }
  }, [isSuccessCreateTask, refetch]);

  const onModalClose = () => setIsOpenModal(false);
  const onModalOpen = () => setIsOpenModal(true);

  const createTask = (formValues: ITaskFormValues) => {
    mutateCreateTask(normalizeCreateTaskBody(formValues));
  };

  return (
    <>
      <DashboardStyled>
        <Button type="button" onClick={onModalOpen}>
          Add task
        </Button>
        <Table tasks={tasks || []} isLoading={isFetching} />
      </DashboardStyled>

      {isOpenModal && (
        <Modal handleModalClose={onModalClose}>
          <TaskForm
            isLoading={isPendingCreateTask}
            error={errorCreateTask?.message}
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
