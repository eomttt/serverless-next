import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ queryTest }) {
  return (
    <div className={styles.container}>
      {`Serverless next test. queryTest: ${queryTest}`}
    </div>
  )
}

Home.getInitialProps = (ctx) => {
  const { query } = ctx;
  console.log('Node log', query);
  return {
    queryTest: query.test,
  }
}
