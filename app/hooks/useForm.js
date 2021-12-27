import { useState, useCallback } from "react";

export default (initialValues) => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleFormChange = useCallback(
    (event) => {
      const { value, name } = event.target;

      setFormValues({ ...formValues, [name]: value });
    },
    [formValues]
  );

  const handleReset = useCallback(() => {
    setFormValues(initialValues);
  }, []);

  return [formValues, handleFormChange, handleReset];
};
