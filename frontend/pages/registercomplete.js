import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function RegisterComplete() {
    return(
        <div className={styles.container}>
            <Head>
            <title>会員登録</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>

            <h1>会員登録が完了しました</h1>

            <Link href="/mypage">
                <a>マイページへ</a>
            </Link>

            </main>
        </div>
    );
}