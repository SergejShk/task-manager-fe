import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button } from '../common/Button';
import Modal from '../common/Modal';

import Table from './Table';
import TaskForm from './TaskForm';

import { useTasksList } from '../../hooks/services/tasks/useTasksList';
import { useCreateTask } from '../../hooks/services/tasks/useCreateTask';
import { useUpdateTask } from '../../hooks/services/tasks/useUpdateTask';
import { useDeleteTask } from '../../hooks/services/tasks/useDeleteTask';

import { normalizeCreateTaskBody } from '../../utils/tasks';

import { ITask, ITaskFormValues } from '../../interfaces/tasks';

const Dashboard: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [activeTask, setActiveTask] = useState<ITask | undefined>(undefined);

  const { data: tasks, isFetching, refetch } = useTasksList();
  const {
    mutate: mutateCreateTask,
    error: errorCreateTask,
    isPending: isPendingCreateTask,
    isSuccess: isSuccessCreateTask,
  } = useCreateTask();
  const {
    mutate: mutateUpdateTask,
    isPending: isPendingUpdateTask,
    error: errorUpdateTask,
    isSuccess: isSuccessUpdateTask,
  } = useUpdateTask();
  const {
    mutate: mutateDeleteTask,
    isPending: isPendingDeleteTask,
    isSuccess: isSuccessDeleteTask,
  } = useDeleteTask();

  useEffect(() => {
    if (isSuccessCreateTask) {
      refetch();
      onModalClose();
    }
  }, [isSuccessCreateTask, refetch]);

  useEffect(() => {
    if (isSuccessUpdateTask) {
      refetch();
      onModalClose();
    }
  }, [isSuccessUpdateTask, refetch]);

  useEffect(() => {
    if (!isSuccessDeleteTask) return;
    refetch();
  }, [isSuccessDeleteTask, refetch]);

  const onModalOpen = () => setIsOpenModal(true);
  const onModalClose = () => {
    setActiveTask(undefined);
    setIsOpenModal(false);
  };

  const onEditClick = (id: number) => {
    const selectedTask = tasks?.find(task => task.id === id);
    setActiveTask(selectedTask);
    setIsOpenModal(true);
  };

  const createTask = (formValues: ITaskFormValues) => {
    mutateCreateTask(normalizeCreateTaskBody(formValues));
  };

  const updateTask = (formValues: ITaskFormValues) => {
    if (!activeTask) return;
    const id = activeTask.id;
    const payload = normalizeCreateTaskBody(formValues);
    mutateUpdateTask({ ...payload, id });
  };

  const DeleteTask = (id: number) => {
    mutateDeleteTask(id);
  };

  return (
    <>
      <DashboardStyled>
        <Button type="button" onClick={onModalOpen}>
          Add task
        </Button>
        <Table
          tasks={tasks || []}
          isLoading={isFetching || isPendingDeleteTask}
          handleEdit={onEditClick}
          handleDelete={DeleteTask}
        />
      </DashboardStyled>

      {isOpenModal && (
        <Modal handleModalClose={onModalClose}>
          <TaskForm
            isLoading={isPendingCreateTask || isPendingUpdateTask}
            error={errorCreateTask?.message || errorUpdateTask?.message}
            handleSaveClick={activeTask ? updateTask : createTask}
            handleCancelClick={onModalClose}
            initialTask={activeTask}
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
