import './globals.css';
import HeaderNavigation from '@/components/organisms/HeaderNavigation';

export const metadata = {
  title: {
    default: 'Pangasinan Coast & Culture',
    template: '%s | Pangasinan Coast & Culture',
  },
  description:
    'A lightweight, mobile-first digital guide to selected heritage destinations in Pangasinan.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <HeaderNavigation />
        {children}
        <footer className="site-footer">
          <div className="footer-mark">P</div>
          <div>
            <strong>Pangasinan Coast & Culture</strong>
            <p>A small digital guide to three memorable places.</p>
          </div>
          <p className="footer-note">Pangasinan, Philippines</p>
        </footer>
      </body>
    </html>
  );
}
