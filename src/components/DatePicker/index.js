import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Clear from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const StyledContainer = styled.div`
  display: flex;
`;

const StyledIconButton = styled(IconButton)`
  margin-left: -65px;
  margin-top: 35px;
  z-index: 1;
`;

const StyledClear = styled(Clear)`
  color: darkGray;
`;

const useStyles = makeStyles(() => ({
  'icon-button': {
    'margin-left': '-80px',
    'margin-top': '24px',
    'z-index': 1,
  },
}));

export default function DatePicker(props) {
  const [startDate, setStartDate] = useState(null);

  const { onDateChange } = props;

  const onChange = date => {
    setStartDate(date);

    if (date) {
      const dateFns = new DateFnsUtils();
      const selectedDate = dateFns.format(date, 'yyyy-MM-dd');
      onDateChange(selectedDate);
    } else {
      onDateChange('');
    }
  };

  const onClear = () => {
    setStartDate(null);
    onDateChange('');
  };

  const classes = useStyles();

  return (
    <StyledContainer>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Select a date"
          format="dd/MM/yyyy"
          value={startDate}
          onChange={onChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <StyledIconButton className={classes['icon-button']} onClick={onClear}>
          <StyledClear />
        </StyledIconButton>
      </MuiPickersUtilsProvider>
    </StyledContainer>
  );
};

DatePicker.propTypes = {
  onDateChange: PropTypes.func,
};
