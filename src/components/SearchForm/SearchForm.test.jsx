
import { render, fireEvent, screen } from '@testing-library/react';

import { SearchForm } from './index';

describe('SearchForm',() => {
    it('should call handleChange function', () => {
        const onChange = jest.fn();
        const inputValue = 'something';
 
        render(<SearchForm handleChange={onChange} />);
 
        const input = screen.getByTestId('input');
 
        fireEvent.change(input, {target: {value: inputValue}});
 
        expect(onChange).toHaveBeenCalled();
    })

    it('should change the title', () => {
        const MOCK_VALUE = 'LION';

        let inputValue = '';

        const onChange = (event) => {
            inputValue = event.target.value;
        };
        
        const { rerender } = render(<SearchForm title={inputValue} handleChange={onChange} />);
 
        const input = screen.getByTestId('input');

        expect(input.value).toBe(inputValue);
 
        fireEvent.change(input, {target: {value: MOCK_VALUE}});

        rerender(<SearchForm title={inputValue} handleChange={onChange} />);
 
        expect(input.value).toBe(MOCK_VALUE);
    })

    it('should call onSearch function', () => {
        const onSearch = jest.fn();
 
        render(<SearchForm onSearch={onSearch} />);

        const addButton = screen.getByTestId('button');

        fireEvent.click(addButton);
 
        expect(onSearch).toHaveBeenCalled();
    })
})