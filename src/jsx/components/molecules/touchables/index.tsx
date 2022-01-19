import React from 'react';
import {TouchableTitleAtomComponent} from '../../atoms/touchables/title';
import {TouchableOpacityMoleculeComponentProps} from './props';

import {Container} from './styles';

export const TouchableOpacityMoleculeComponent: React.FC<
  TouchableOpacityMoleculeComponentProps
> = ({
  title,
  border,
  background,
  mode = 'filled',
  type = 'primary',
  disabled = false,
  activeOpacity = 0.3,
  ...rest
}) => {
  return (
    <Container
      border={border}
      background={background}
      activeOpacity={activeOpacity}
      mode={mode}
      type={type}
      disabled={disabled}
      {...rest}>
      {title && (
        <TouchableTitleAtomComponent
          text={title}
          mode={mode}
          type={type}
          disabled={disabled}
        />
      )}
    </Container>
  );
};
