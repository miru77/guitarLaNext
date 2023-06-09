import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/footer.module.css";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/tienda">Tienda</Link>
        </nav>
        <p className={styles.copyrigth}>
          Todos los derechos recervados {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
