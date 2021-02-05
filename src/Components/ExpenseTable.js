import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Data from './ExpenseData.js';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
}));

export default function ExpenseTable() {
  const classes = useStyles();
  const [expenses, setExpense] = React.useState( Data );

  const handleChange = (prop) => (event) => {
    setExpense( { ...expenses, [prop]: event.target.value } );
  };

  

  return (
    <div> 
        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
          <FilledInput
            value={expenses.name[0]}
            onChange={handleChange('name')}
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
          <FilledInput
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        {/* <Button variant="contained"  */}
     </div>
      
  );
}