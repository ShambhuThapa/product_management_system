import { ErrorMessage } from '@hookform/error-message';
import React from 'react';

interface ErrorMessageProps {
  errors: any;
  name: string;
}

const ErrorMessageComponent: React.FC<ErrorMessageProps> = ({ errors, name }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ messages }) =>
        messages &&
        Object.entries(messages).map(([type, message]) => (
          <p key={type} className='text-danger'>
            *{message}
          </p>
        ))
      }
    />
    
  );
};

export default ErrorMessageComponent;
