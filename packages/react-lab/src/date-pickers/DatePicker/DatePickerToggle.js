import { Box } from '@tonic-ui/react';
import React, { forwardRef, useCallback } from 'react';
import wrapEvent from '../../utils/wrapEvent';
import useForkRef from '../../utils/useForkRef';
import {
  useDatePickerToggleStyle,
} from './styles';
import useDatePicker from './useDatePicker';

const DatePickerToggle = forwardRef((
  {
    children,
    disabled,
    onClick: onClickProp,
    onKeyDown: onKeyDownProp,
    ...rest
  },
  ref,
) => {
  const datePickerContext = useDatePicker(); // context might be an undefined value
  const {
    datePickerContentId,
    datePickerToggleId,
    datePickerToggleRef,
    isOpen,
    onClose,
    onOpen,
  } = { ...datePickerContext };
  const styleProps = useDatePickerToggleStyle();
  const combinedRef = useForkRef(datePickerToggleRef, ref);
  const handleClick = wrapEvent(onClickProp, useCallback((event) => {
    // Don't handle `onClick` event when the `DatePickerToggle` is disabled
    if (disabled) {
      event.preventDefault();
      return;
    }

    onOpen?.();
  }, [disabled, onOpen]));

  const handleKeyDown = wrapEvent(onKeyDownProp, useCallback((event) => {
    // Don't handle `onKeyDown` event when the `DatePickerToggle` is disabled
    if (disabled) {
      event.preventDefault();
      return;
    }

    if (event.key === 'Enter') {
      onOpen?.();
      return;
    }

    if (event.key === 'Escape') {
      onClose?.();
      return;
    }
  }, [disabled, onClose, onOpen]));

  const getDatePickerToggleProps = () => ({
    'aria-controls': datePickerContentId,
    'aria-disabled': disabled,
    'aria-expanded': isOpen,
    'aria-haspopup': 'menu',
    disabled,
    id: datePickerToggleId,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    ref: combinedRef,
    role: 'button',
    tabIndex: 0,
    ...styleProps,
    ...rest,
  });

  if (typeof children === 'function') {
    return children({
      getDatePickerToggleProps,
    });
  }

  return (
    <Box {...getDatePickerToggleProps()}>
      {children}
    </Box>
  );
});

DatePickerToggle.displayName = 'DatePickerToggle';

export default DatePickerToggle;
