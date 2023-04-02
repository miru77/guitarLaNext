import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/nosotros.module.css";

export default function Nosotros() {
  return (
    <Layout title={"Nosotros"} description={"Sobre Nosotros, GuitarLa"}>
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
            alt="Imagen sobre nosotros"
          />
          <div>
            <p>
              Vestibulum sodales, metus id convallis auctor, eros leo convallis
              metus, sagittis faucibus ante justo vel orci. Nulla egestas tortor
              et ullamcorper pretium. Maecenas varius lobortis metus, at tempus
              risus ornare id. Donec sit amet congue dui. Morbi vitae lacus at
              quam tempor suscipit ut quis elit. Fusce dictum sapien leo,
              vestibulum commodo nisi euismod a. Quisque eget tellus ut eros
            </p>
            <p>
              Maecenas condimentum nisi dui, gravida dapibus urna sagittis ut.
              Aliquam erat volutpat. Etiam aliquam erat a nisl gravida, sed
              vulputate nibh iaculis. Etiam non lectus erat. Sed eget ante non
              ex molestie pellentesque. Maecenas elementum sem justo, vitae
              rhoncus eros mollis in. Cras in quam vitae nisl rutrum bibendum.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
