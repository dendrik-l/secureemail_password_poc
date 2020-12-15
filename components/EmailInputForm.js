import { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

export default function EmailInputForm({ onSubmit, savedEmails }) {
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
          <Autocomplete
            style={{ width: 500, alignSelf: "center" }}
            freeSolo
            options={savedEmails}
            onInputChange={(event, value, reason) => {
              setInput(value);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                margin="normal"
                label="Email"
              />
            )}
          />
        </Grid>
        <Grid item>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
