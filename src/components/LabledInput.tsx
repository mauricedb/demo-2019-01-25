import React, { Component, ChangeEvent } from 'react';

type LabledInputProps = {
  value: string | number;
  name: string;
  caption: string;
  onChange: (e: { name: string; value: string | number }) => void;
  type?: 'text' | 'number' | 'bla';
  className?: string;
};

class LabledInput extends Component<LabledInputProps> {
  render() {
    const {
      name,
      value,
      caption: label,
      onChange,
      type,
      className
    } = this.props;

    return (
      <div className={'default ' + className}>
        <label className="label" htmlFor={name}>
          {label}
        </label>
        <input
          type={type || 'text'}
          id={name}
          value={value}
          name={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target)}
        />
      </div>
    );
  }
}

export default LabledInput;
