import Link from 'next/link';

export default function Header() {
  return (
    <div className="header">
        <p>
        <li>
            <Link href="/">
            <a>Home</a>
            </Link>
        </li>
        </p>
        <p>
        お一人様旅行プランナー
        </p>
    </div>
  );
}