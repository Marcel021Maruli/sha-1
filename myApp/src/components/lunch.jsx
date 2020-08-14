import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export default function OutlinedButtons() {
  return (
    <div className="header">
      <Button variant="outlined" style={{ width: "50%", color: "#f1f1f2", backgroundColor: "#424749" }} >Lunch</Button>
      <Button variant="outlined" style={{ width: "50%" }}>Dinner</Button>
    </div>
  );
}
