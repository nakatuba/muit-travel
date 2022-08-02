import Link from 'next/link';

export default function Header() {
  return (
    <div className="header">
        <p>
            <Link href="/">
            <a>Home</a>
            </Link>
        </p>
        <p>
        お一人様旅行プランナー
        </p>
    </div>
  );
}