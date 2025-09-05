const FormCard = ({ children, title, description, className = "" }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden ${className}`}>
      {(title || description) && (
        <div className="p-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-cyan-50 border-b border-indigo-100">
          {title && <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>}
          {description && <p className="text-slate-600">{description}</p>}
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>

  )
}

export default FormCard
