const Button = ({ title, type, className }) => {
  return (
    <button
      type={type}
      className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
