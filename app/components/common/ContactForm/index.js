import React from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  OutlinedInput,
  useFormControl,
} from "@material-ui/core";

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return "This field is being focused";
    }

    return "enter smth";
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

const ContactForm = () => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: "25ch" }}>
        <OutlinedInput placeholder="Please enter text" />
        <MyFormHelperText />
      </FormControl>
    </Box>
  );
};

export default ContactForm;
