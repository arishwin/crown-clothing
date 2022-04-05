import "./button.styles.scss";

const Button = ({ children, buttonType, ...otherProps }) => {
  const BUTTON_TYPE_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted",
  };

  return (
    <button
      type="submit"
      className={`${BUTTON_TYPE_CLASSES[buttonType]} button-container`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
