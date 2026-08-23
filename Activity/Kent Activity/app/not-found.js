import Button from '@/components/atoms/Button';

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <p className="eyebrow">404</p>
      <h1>This stop is not on the guide.</h1>
      <Button href="/">Return home</Button>
    </main>
  );
}
