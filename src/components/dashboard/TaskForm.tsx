import { FC } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import styled from 'styled-components';

import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Datepicker from '../common/Datepicker';
import InputSelect from '../common/InputSelect';
import { Button } from '../common/Button';

import { statusOptions } from '../../utils/constants';

import { EStatus, ITask, ITaskFormValues } from '../../interfaces/tasks';

interface IProps {
  initialTask?: ITask;
  isLoading: boolean;
  error?: string;
  handleSaveClick: (formValues: ITaskFormValues) => void;
  handleCancelClick: () => void;
}

const TaskForm: FC<IProps> = ({
  initialTask,
  isLoading,
  error,
  handleSaveClick,
  handleCancelClick,
}) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITaskFormValues>({
    defaultValues: {
      title: initialTask?.title || '',
      status: { value: EStatus.Open, label: 'Open' },
    },
  });

  const descriptionValue = useWatch({
    name: 'description',
    control,
  });

  return (
    <FormStyled onSubmit={handleSubmit(handleSaveClick)}>
      <Input
        type="text"
        name="title"
        label={<NameLabel>Title</NameLabel>}
        register={register}
        rules={{ required: { value: true, message: 'Required' } }}
        error={errors?.title?.message || error}
      />

      <Textarea
        name="description"
        label={<NameLabel>Description</NameLabel>}
        register={register}
        rules={{ required: { value: true, message: 'Required' } }}
        value={descriptionValue}
        error={errors?.description?.message || error}
      />

      <Input
        type="text"
        name="assignee"
        label={<NameLabel>Assignee</NameLabel>}
        register={register}
        error={errors?.assignee?.message || error}
      />

      <Controller
        name="dueDate"
        control={control}
        render={({ field }) => (
          <Datepicker
            name="dueDate"
            label="Due Date"
            value={field.value}
            onChangeValue={field.onChange}
          />
        )}
      />

      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <InputSelect
            id="status"
            options={statusOptions}
            value={field.value}
            onChange={field.onChange}
            label="Status"
            placeholder=""
          />
        )}
      />

      <ButtonWrapper>
        <Button disabled={isLoading}>Save</Button>
        <Button type="button" disabled={isLoading} onClick={handleCancelClick}>
          Cancel
        </Button>
      </ButtonWrapper>
    </FormStyled>
  );
};

export default TaskForm;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`;

const NameLabel = styled.span`
  font-size: 18px;
`;