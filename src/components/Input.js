/* eslint-disable no-unused-vars */
import React from 'react';
import { TextField } from '@material-ui/core';
import { translate } from 'actions';
import withTheme from './withTheme';

class Input extends React.PureComponent {
  render() {
    const { classes, lang, label, value, disabled, onChange } = this.props;
    return (
      <TextField
        type="number"
        variant="filled"
        className={classes}
        value={value}
        disabled={disabled}
        label={translate(label, lang)}
        onChange={onChange}
        inputProps={{
          name: label,
          onKeyPress: this.handleKeyPress,
        }}
      />
    );
  }

  handleKeyPress = e => {
    //prevent user enter + - e in number input field.
    if (['+', '-', 'e', '.'].indexOf(e.key) !== -1) {
      e.preventDefault();
    }
  };
}

export default withTheme(Input);
