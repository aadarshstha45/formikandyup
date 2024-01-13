import "./formInput.css";
const FormInput = (props) => {
  const { label, errorMessage, ...inputProps } = props;

  const error = errorMessage ? "error" : "";

  return (
    <div className={`formInput ${error}`}>
      <label>{label}</label>
      <input {...inputProps} />
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};

export default FormInput;
