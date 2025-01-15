import S from "./doados.module.scss"
import CardsLivros from "../../Components/CardsLivros/cardsLivros"
import ImgLivro1 from '../../assets/livroProtagonista.png'
import ImgLivro2 from '../../assets/livroDataScience.jpg'
import ImgLivro3 from '../../assets/livroPaiRico.jpg'


export default function Doados() {
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
                <CardsLivros 
                    bookData={{
                        image: ImgLivro2,
                        alter: 'Capa do livro Data Science do Zero',
                        title: 'Data Science do Zero',
                        author: 'Joel Grus',
                        genre: 'Tecnologia'
                }}/>
                <CardsLivros 
                    bookData={{
                        image: ImgLivro3,
                        alter: 'Capa do livro Pai Rico, Pai Pobre',
                        title: 'Pai Rico, Pai Pobre',
                        author: 'Kiyosaki T Robert',
                        genre: 'Finanças'
                }}/>
            </section>
        </main>
    )
}