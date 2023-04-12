import { useAppSelector } from 'hooks/useAppSelector';
import React, { forwardRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
} from 'react-native';
import { RootState } from 'store';

export type InputValue = string | undefined | number | boolean;
interface IProps {
  label: string;
  name: string;
  value: string | undefined;
  onChangeTextInput: (name: string, value: InputValue) => void;
  errorText?: string | undefined;
  customWrapperStyle?: any;
  customInputStyle?: any;
  customLabelStyle?: any;
  placeholderTextColor?: string;
  editable?: boolean;
  [x: string]: any;
}
const InputField = forwardRef<TextInput, IProps & TextInputProps>(
  (props: IProps & TextInputProps, ref) => {
    const {
      label = '',
      name,
      value,
      onChangeTextInput,
      errorText,
      customWrapperStyle,
      customInputStyle,
      customLabelStyle,
      placeholderTextColor,
      editable = true,
      ...rest
    } = props;
    const { theme } = useAppSelector((state: RootState) => state.theme);
    const handleChange = (value: string | undefined) => {
      onChangeTextInput(name, value);
    };
    return (
      <>
        <View style={[styles.wrapper]}>
          {label !== '' ? (
            <View style={styles.labelContainer}>
              <Text style={[styles.label, customLabelStyle]}>{label}</Text>
            </View>
          ) : null}

          <View style={[styles.textInpuContainer]}>
            <TextInput
              value={value}
              style={[
                styles.textInput,
                { padding: theme.spacing.s },
                theme.textVariants.body,
              ]}
              placeholderTextColor={theme.colors.graySecondary}
              onChangeText={handleChange}
              editable={editable}
              ref={ref}
              {...rest}
            />
          </View>
        </View>
      </>
    );
  },
);
InputField.displayName = 'InputField';
const styles = StyleSheet.create({
  wrapper: {
    overflow: 'visible',
    marginBottom: 5,
  },

  labelContainer: {
    flexDirection: 'row',
  },

  textInpuContainer: {
    flexDirection: 'row',
    position: 'relative',
    paddingVertical: 0,
    // height: '40@vs',
    width: '100%',
  },
  textInput: {
    fontSize: 16,
    width: '100%',
  },
  label: {},
});

export default InputField;
