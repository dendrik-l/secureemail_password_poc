import { TextField, Button, Grid } from "@material-ui/core";
import { useState } from "react";

export default function OtpInputForm({ onSubmit }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let temp = input;
    setInput("");
    onSubmit(temp);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction='column' alignItems='center'>
        <Grid item>
          <TextField
            value={input}
            variant="outlined"
            label="OTP"
            margin="normal"
            onChange={(e) => setInput(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Verify
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
