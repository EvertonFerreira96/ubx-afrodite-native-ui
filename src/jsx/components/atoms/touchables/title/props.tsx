export interface TouchableTitleAtomComponentProps {
  mode?: 'filled' | 'outline' | 'ghost';
  type?: 'primary' | 'secundary';
  text: string;
  color?: string;
  background?: string;
  disabled?: boolean;
}

export interface TouchableTitleAtomComponentStyleSheetProps {
  mode: 'filled' | 'outline' | 'ghost';
  type: 'primary' | 'secundary';
  color?: string;
  background?: string;
  disabled?: boolean;
}
