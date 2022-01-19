import {TouchableOpacityProps} from 'react-native';

export interface TouchableOpacityMoleculeComponentProps
  extends TouchableOpacityProps {
  mode?: 'filled' | 'outline' | 'ghost';
  type?: 'primary' | 'secundary';
  title: string;
  background?: string;
  disabled?: boolean;
  border?: string;
}

export interface TouchableOpacityMoleculeComponentStyleSheetProps
  extends TouchableOpacityProps {
  mode: 'filled' | 'outline' | 'ghost';
  type: 'primary' | 'secundary';
  background?: string;
  border?: string;
  disabled?: boolean;
}
