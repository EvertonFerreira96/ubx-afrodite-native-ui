import React from 'react';
import {TouchableTitleAtomComponentProps} from './props';

import {Text} from './styles';

export const TouchableTitleAtomComponent: React.FC<
  TouchableTitleAtomComponentProps
> = ({text, disabled = false, mode = 'filled', type = 'primary', ...rest}) => {
  return (
    <Text mode={mode} type={type} disabled={disabled} {...rest}>
      {text}
    </Text>
  );
};
