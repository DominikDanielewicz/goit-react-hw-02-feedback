import React from 'react';
import propTypes from 'prop-types';
import css from './Statistics.module.css';
import Section from 'components/Section/Section';

const Statistics = props => {
  return (
    <Section title="Statistics">
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>Total: {props.total}</p>
      <p>Positive feedback: {props.positivePercentage}</p>
    </Section>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

export default Statistics;
