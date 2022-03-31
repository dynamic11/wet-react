import React from 'react';
import Form from 'react-bootstrap/Form';
import '../../style.css';

type typeType = 'valid' | 'invalid';

export interface InputGroupFeedbackProps {
  /** Content of the Feedback */
  children?: React.ReactNode;
  /** Display feedback as a tooltip. */
  tooltip?: boolean;
  /** Specify whether the feedback is for valid or invalid fields */
  type?: typeType;
  /** Additional custom classNames */
  className?: string;
}

const InputGroupFeedback = ({
  children,
  tooltip,
  type = 'valid',
  className = '',
  ...rest
}: InputGroupFeedbackProps) => {
  const tooltipClass = tooltip === true ? 'tooltip' : '';

  return (
    <Form.Control.Feedback
      tooltip={tooltip}
      type={type}
      className={`${tooltipClass} ${className}`}
      {...rest}
    >
      {children}
    </Form.Control.Feedback>
  );
};

InputGroupFeedback.displayName = 'InputGroup.Feedback';

export default InputGroupFeedback;
