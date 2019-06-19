import React, { ChangeEvent } from 'react';

interface IPropsSampleText {
  current_value: string;
  placeholder?: string;
  onChange: (new_value: string) => any;
}

interface IStateSampleText {}

class SampleInput extends React.Component<IPropsSampleText, IStateSampleText> {
  onChange = (event: ChangeEvent<any>) => {
    this.props.onChange(event.target.value);
  };
  render() {
    return (
      <input
        type={'text'}
        value={this.props.current_value}
        placeholder={this.props.placeholder || 'Enter Value'}
        onChange={this.onChange}
      />
    );
  }
}

function myOnChange(text: string): void {
  console.log(text);
  return undefined;
}

<SampleInput
  current_value={'abc'}
  placeholder={'Sela'}
  onChange={myOnChange}
/>;
