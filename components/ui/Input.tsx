import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  
  variant?: "default";
  error?: string; 
}

const Input:React.FC<InputProps> = ({variant = "default", className = "", id, error, ...props}) => {

 const variants = {
    default:
      "w-full px-6 py-4 bg-slate-950 border border-slate-800 rounded-2xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 transition-all text-white",
  };

const inputId = id || props.name;

  return (
    <div className="w-full flex flex-col space-y-1">

      {/* INPUT */}
      <input
        id={inputId}
        {...props}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`
          ${variants[variant]}
          ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-primary"}
          ${className}
        `}
      />

      {/* ERROR MESSAGE */}
      {error && (
        <p
          id={`${inputId}-error`}
          className="text-red-500 text-xs"
        >
          {error}
        </p>
      )}
    </div>
  )
}

export default Input
