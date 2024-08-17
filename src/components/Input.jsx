function Input({ value, placeholder, type, name, extraClass, isRequired , onChange }) {
    return (
      <input 
        required={isRequired} 
        className={`w-full focus:shadow-lg duration-300 py-[13px] pl-[20px] border-[1px] border-slate-500 text-[18px] text-slate-500 rounded-[6px] ${extraClass}`} 
        name={name} 
        type={type} 
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  }
  
  export default Input;
  
