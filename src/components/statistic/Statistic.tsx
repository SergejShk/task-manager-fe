import { FC } from 'react';
import styled from 'styled-components';

import Loader from '../common/Loader';

import { useTasksStatistic } from '../../hooks/services/tasks/useTasksStatistic';

import { statusValue } from '../../utils/constants';

import { EStatus } from '../../interfaces/tasks';

const Statistic: FC = () => {
  const { data: statistic, isFetching } = useTasksStatistic();

  if (isFetching) {
    return <Loader />;
  }

  return (
    <StatisticStyled>
      <StatisticBlock>
        <BlockTitile>Status:</BlockTitile>
        {statistic && Object.keys(statistic.status).length > 0 && (
          <StatisticList>
            {Object.keys(statistic.status).map((item, idx) => (
              <StatisticItem key={idx}>
                <Title>{statusValue[item as EStatus]}:</Title>
                <p>{statistic.status[item]}</p>
              </StatisticItem>
            ))}
          </StatisticList>
        )}
        <Devider />
      </StatisticBlock>

      <StatisticBlock>
        <BlockTitile>Assignee:</BlockTitile>
        {statistic && Object.keys(statistic.assignee).length > 0 && (
          <StatisticList>
            {Object.keys(statistic.assignee).map((item, idx) => (
              <StatisticItem key={idx}>
                <Title>{item}:</Title>
                <p>{statistic.assignee[item]}</p>
              </StatisticItem>
            ))}
          </StatisticList>
        )}
        <Devider />
      </StatisticBlock>

      <StatisticBlock>
        <BlockTitile>Week:</BlockTitile>
        {statistic && Object.keys(statistic.dueDate).length > 0 && (
          <StatisticList>
            {Object.keys(statistic.dueDate).map((item, idx) => (
              <StatisticItem key={idx}>
                <Title>{item}:</Title>
                <p>{statistic.dueDate[item]}</p>
              </StatisticItem>
            ))}
          </StatisticList>
        )}
      </StatisticBlock>
    </StatisticStyled>
  );
};

export default Statistic;

const StatisticStyled = styled.div`
  padding: 15px;
  border-radius: 4px;
  background-color: #fff;
`;

const StatisticBlock = styled.div``;

const BlockTitile = styled.p`
  font-weight: 700;
`;

const Devider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #b4c0ee;
  margin: 15px 0;
`;

const StatisticList = styled.ul`
  margin-top: 10px;
`;

const StatisticItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Title = styled.p`
  min-width: 20%;
  font-weight: 500;
`;
