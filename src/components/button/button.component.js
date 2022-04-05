import "./button.styles.scss";

const Button = ({ children, buttonType }) => {
  const buttonClass = {
    google: "google-sign-in",
    inverted: "inverted",
    basic: "",
  };

  return (
    <button
      type="submit"
      className={`${buttonClass[buttonType]} button-container`}
    >
      {children}
    </button>
  );
};

export default Button;
