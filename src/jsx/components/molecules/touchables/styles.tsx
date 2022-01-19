import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacityMoleculeComponentStyleSheetProps} from './props';

export const Container = styled(TouchableOpacity).attrs(
  {},
)<TouchableOpacityMoleculeComponentStyleSheetProps>`
  background: ${({theme, background, mode, type, disabled}) =>
    background ||
    theme.colors.actions[mode].background[disabled ? 'disabled' : 'enabled'][
      type
    ].natural};

  border-width: 1px;
  border-style: solid;
  border-color: ${({theme, border, mode, type, disabled}) =>
    border ||
    theme.colors.actions[mode].border[disabled ? 'disabled' : 'enabled'][type]
      .natural};

  padding: ${RFValue(8)}px ${RFValue(16)}px;
  border-radius: ${RFValue(24)}px;
`;
