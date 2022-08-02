import Link from 'next/link';

export default function Header() {
  return (
    <div className="header">
        <ul>
            <Link href="/">
                <a>ホーム</a>
            </Link>
            <Link href="/login">
                <a>ログイン</a>
            </Link>
            <Link href="/register">
                <a>会員登録</a>
            </Link>
        </ul>
    </div>
  );
}