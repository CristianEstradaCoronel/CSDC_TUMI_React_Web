export function Button({ children, className = '', variant = 'default', ...props }) {
  const base = 'px-4 py-2 rounded-xl font-semibold transition-all duration-200';
  const styles = {
    default: 'bg-yellow-500 text-black hover:bg-yellow-400',
    outline: 'border border-yellow-500 text-yellow-500 hover:bg-yellow-500/20'
  };
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}