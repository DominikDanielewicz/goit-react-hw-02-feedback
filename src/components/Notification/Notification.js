import React from 'react';
import css from './Notification.module.css';
import propTypes from 'prop-types';

const Notification = props => {
  return <h2>{props.message}</h2>;
};

Notification.propTypes = {
  message: propTypes.string.isRequired,
};

export default Notification;
