import Link from 'next/link';

export default function NavItem({ href, children }) {
  return (
    <li>
      <Link className="nav-item" href={href}>{children}</Link>
    </li>
  );
}
