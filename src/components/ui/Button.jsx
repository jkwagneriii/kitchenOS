import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-accent text-white font-bold hover:bg-accent/80',
  outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white',
  ghost: 'border border-white/10 text-faint hover:border-accent hover:text-accent',
}

const sizes = {
  md: 'px-8 py-4',
  sm: 'px-4 py-2',
}

/**
 * Brand button. Renders a <button>, or a link when `href` (external) or
 * `to` (internal route) is provided.
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  to,
  type = 'button',
  onClick,
  className = '',
  children,
  ...rest
}) {
  const classes = `inline-block font-mono ${size === 'sm' ? 'text-mono-sm' : 'text-mono-body'} uppercase tracking-widest transition-all duration-300 cursor-pointer text-center ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return <Link to={to} className={classes} {...rest}>{children}</Link>
  }
  if (href) {
    return <a href={href} className={classes} {...rest}>{children}</a>
  }
  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  )
}
