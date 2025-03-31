import S from "./doados.module.scss"
import CardsLivros from "../../Components/CardsLivros/cardsLivros"
import ImgLivro1 from '../../assets/livroProtagonista.png'
import axios from "axios"
import { useState, useEffect } from "react"


export default function Doados() {

    const [livros, setLivros] = useState([])

    const getLivros = async () => {
        const response = await axios.get("https://desafio-2-api-livros-vai-na-web-z4jx.onrender.com/livros")
        // console.log(response);
        setLivros(response.data)
        
    }

    useEffect(() => {
        getLivros()
    },[])


    return(
        <main className={S.main}>
            <section>
                <h2>Livros Doados</h2>
            </section>
            <section className={S.cardsBox}>
                <CardsLivros 
                    bookData={{
                        image: ImgLivro1,
                        alter: 'Capa do livro O Protagonista',
                        title: 'O Protagonista',
                        author: 'Susanne Andrade',
                        genre: 'Ficção'
                }}/>
                {livros.map((item) => (
                    <CardsLivros key={item.id}
                        bookData={{
                        image: item.imagem_url,
                        title: item.titulo,
                        author: item.autor,
                        genre: item.categoria
                    }}/>
                ))}
            </section>
        </main>
    )
}