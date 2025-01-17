import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import useConst from './useConst';
import useEventCallback from './useEventCallback';

describe('useEventCallback', () => {
  it('should be defined', () => {
    expect(useEventCallback).toBeDefined();
  });

  it('should return a memoized function even if value changes', () => {
    const TestComponent = () => {
      const [value, setValue] = useState('');
      const onChange = useEventCallback((event) => {
        const nextValue = event.target.value;
        setValue(nextValue);
      }, [value]);
      const memoizedEventCallback = useConst(() => onChange);

      useEffect(() => {
        expect(onChange).toEqual(memoizedEventCallback);
      }, [value, onChange, memoizedEventCallback]);

      return (
        <input value={value} onChange={onChange} placeholder="Enter your text" />
      );
    };

    const { container } = render(<TestComponent />);
    const input = container.querySelector('input');
    userEvent.type(input, 'Hello');
  });
});
