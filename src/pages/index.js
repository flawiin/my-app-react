import Head from "next/head";
import styles from "@/styles/Home.module.css";



export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <header>
          <p>React JS</p>
        </header>

        <main>
          <section className={styles.secao__titulo}>
            <h1>React JS</h1>
            <p>Biblioteca JavaScript para criar SPAs</p>
            <a href="#">Site oficial</a>
          </section>

          <section className={styles.secao__requisitos}>
            <h2>Requisitos</h2>
            <p>Veja abaixo os requisitos mínimos para aprender React JS:</p>
            <div className={styles.container__cards}>
              <div>
                <h3>HTML</h3>
                <p>Aprenda a estruturar os elementos da página com HTML</p>
              </div>
              <div>
                <h3>CSS</h3>
                <p>Aprender a estilizar os elementos da página com CSS</p>
              </div>
              <div>
                <h3>JavaScript</h3>
                <p>Aprender a linguagem utilizada pelo React JS, o JavaScript</p>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <p>Curso de introdução de React JS</p>
        </footer>
      </div>
      
    </div>
  );
}
