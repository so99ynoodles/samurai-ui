import { HoverProps, FocusProps } from '@react-aria/interactions'
import {
  SamuraiUIComponentProps,
  SamuraiUIPaletteColorTypes,
  SamuraiUITextProps,
  SamuraiUIColorTypes,
  SizeValue,
} from '../../shared'
import { AriaTextFieldOptions } from '@react-aria/textfield'

export interface SamuraiUITextFieldStyleProps extends SamuraiUITextProps {
  labelPosition?: 'top' | 'side'
  outlineColor?: SamuraiUIPaletteColorTypes
  borderColor?: SamuraiUIPaletteColorTypes
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
  borderColor?: SamuraiUIPaletteColorTypes
  borderWidth?: SizeValue | SizeValue[]
  backgroundColor?: SamuraiUIPaletteColorTypes
  shadowColor?: SamuraiUIPaletteColorTypes
  colorVariant?: SamuraiUIColorTypes
}

export interface SamuraiUITextFieldInputProps {
  isHovered?: boolean
  isDisabled?: boolean
  outlineColor?: SamuraiUIPaletteColorTypes
  borderColor?: SamuraiUIPaletteColorTypes
  borderWidth?: SizeValue | SizeValue[]
  backgroundColor?: SamuraiUIPaletteColorTypes
  shadowColor?: SamuraiUIPaletteColorTypes
  colorVariant?: SamuraiUIColorTypes
}

export interface SamuraiUITextFieldLabelProps {
  isRequired?: boolean | string
}
