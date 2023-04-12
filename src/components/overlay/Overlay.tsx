import React, { FC } from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

interface IProps {
  onClose: () => void;
  isVisible: boolean;
  children: React.ReactNode;
  scrollable?: boolean;
}
const Overlay: FC<IProps> = ({
  onClose,
  isVisible,
  children,
  scrollable = false,
}) => {
  return (
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        {scrollable ? (
          <ScrollView style={[styles.container]}>{children}</ScrollView>
        ) : (
          <View
            style={[
              styles.container,
              { justifyContent: 'flex-end', alignItems: 'flex-end' },
            ]}>
            <View style={styles.children}>{children}</View>
          </View>
        )}
      </TouchableWithoutFeedback>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  children: {
    width: '100%',
    justifyContent: 'flex-end',
  },
});
export default Overlay;
