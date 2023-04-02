import Image from "next/image";
import Link from "next/link";
import styles from "../styles/guitarras.module.css";

export default function Guitarra({ guitarra }) {
  const { nombre, descripcion, precio, url, imagen } = guitarra;
  return (
    <div className={styles.guitarra}>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={nombre}
      />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>$ {precio}</p>

        <Link className={styles.enlace} href={`guitarras/${url}`}>
          Ver producto
        </Link>
      </div>
    </div>
  );
}
