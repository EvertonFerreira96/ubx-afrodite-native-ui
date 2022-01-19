import styled from 'styled-components/native';
import {Text as TextComponentRN} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {TouchableTitleAtomComponentStyleSheetProps} from './props';

export const Text = styled(TextComponentRN).attrs({})<
  Omit<TouchableTitleAtomComponentStyleSheetProps, 'text'>
>`
  text-align: center;
  font-weight: 700;
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(20)}px;
  color: ${({theme, color, mode, type, disabled}) =>
    color ||
    theme.colors.actions[mode].color[disabled ? 'disabled' : 'enabled'][type]
      .natural};

  padding: ${RFValue(8)}px ${RFValue(16)}px;
`;
