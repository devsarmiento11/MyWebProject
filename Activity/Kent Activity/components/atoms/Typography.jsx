export default function Typography({ as = 'p', variant = 'body', children, className = '' }) {
  const Tag = as;
  return <Tag className={`type type--${variant} ${className}`.trim()}>{children}</Tag>;
}
