import React from 'react';
import { useQuery } from '@apollo/client';
import Loading from '../Loading'
import GET_HISTORY from '../../graphql/getHistory';
import './Timeline.css';

const findTagColor = (str = '') => {
  let temp = str.toLowerCase().trim().split(' ').join('_');

  const guide = {
    tech: 'tech',
    tech_education: 'tech-education',
    education: 'education',
    work_automotive: 'work-automotive'
  };

  return guide[temp];
}

const TimelineItem = ({ data }) => (
  <div className='timeline-item'>
    <div className='timeline-item-content'>
      <span className={`tag ${findTagColor(data.historyType)}`}>
        {data.historyType}
      </span>
      <br />
      <time>{data.dateRange}</time>
      <h3>{data.titleCard}</h3>
      <p>{data.info}</p>
      {data.contact && (
        <a
          href={data.contact}
          target='_blank'
          rel='noopener'
          className='btn btn-link'
        >
          Learn More
        </a>
      )}
      <span className='circle' />
    </div>
  </div>
);

function Timeline() {
  const { data: { histories = [] } = {}, loading, error } = useQuery(
    GET_HISTORY,
    {
      fetchPolicy: 'network-only'
    }
  )

  if (loading) {
    return <Loading />;
  }

  return histories.length > 0 && (
    <div className='timeline-container'>
      {histories.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );
}

export default Timeline;
