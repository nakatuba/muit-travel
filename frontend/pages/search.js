import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Search() {
    return (
      <div className={styles.container}>
        <Head>
            <title>プラン検索</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/logo.svg" />
        </Head>


      <form className={styles.main} action="/search_result">
        <h2 className={styles.subtitle}>検索条件</h2>
        <div className={styles.item}>
          <p className={styles.condition}>目的地</p>
          <p>
            <select name="destination_type">
              <option value="" selected></option>
              <option value="HOKKAIDO">北海道</option>
              <option value="KANAGAWA">神奈川県</option>
              <option value="OKINAWA">沖縄県</option>
            </select>
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.condition}>イベントタイプ</p>
          <p>
            <select name="event_type">
              <option value="" selected></option>
              <option value="OUTDOOR">アウトドア</option>
              <option value="INDOOR">インドア</option>
              <option value="FOOD">美食</option>
              <option value="HOT_SPRING">温泉</option>
            </select>
          </p>
        </div>
        <div>
          <button className="button" type="submit">
            検索
          </button>
        </div>
      </form>
    </div>
  )
}
