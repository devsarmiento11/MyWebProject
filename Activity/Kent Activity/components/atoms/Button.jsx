import Link from 'next/link';

export default function Button({ href, children, variant = 'primary', ...props }) {
  const className = `button button--${variant}`;

  if (href) {
    return (
      <Link className={className} href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} type="button" {...props}>
      {children}
    </button>
  );
}
