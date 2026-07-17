

function CustomButton({ leftIcon, rightIcon, text, className }) {
  return (
    <button className={className}>
      {leftIcon}
      <span>{text}</span>
      {rightIcon}
    </button>
  );
}

export default CustomButton;






