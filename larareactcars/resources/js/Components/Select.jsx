import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ options = null, name, id, value, className = '',autoComplete, required, isFocused = false, handleChange}, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <select
            name={name}
            id={id}
            value={value}
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
            ref={input}
            autoComplete={autoComplete}
            required={required}
            onChange={(e) => handleChange(e)}
        >
            {options.map((option) => (
                <option value={option} key={option}>{option}</option>
            ))}
        </select>
    );
});