import { HoverProps, FocusProps } from '@react-aria/interactions'
import {
  SamuraiUIComponentProps,
  SamuraiUIColorTypes,
  SamuraiUITextProps,
} from '../../../../build/types/shared'
import { AriaTextFieldOptions } from '@react-aria/textfield'
export interface SamuraiUITextFieldStyleProps extends SamuraiUITextProps {
  labelPosition?: 'top' | 'side'
  outlineColor?: SamuraiUIColorTypes
  fluid?: boolean
  vivid?: boolean
}
export interface SamuraiUITextFieldProps
  extends SamuraiUIComponentProps,
    SamuraiUITextFieldStyleProps,
    AriaTextFieldOptions,
    HoverProps,
    FocusProps {
  label?: string
  placeholder?: string
  autoFocus?: boolean
}
