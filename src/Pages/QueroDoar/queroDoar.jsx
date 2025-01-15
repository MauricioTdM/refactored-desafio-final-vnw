import S from './queroDoar.module.scss'
import Book from '../../assets/book.png'


export default function QueroDoar() {
    return(
        <main className={S.main}>
            <section className={S.title}>
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
            </section>
            <section className={S.formSection}>
                <form action="">
                    <div>
                        <img src={Book} alt="Logo de um livro aberto" />
                        <h3>Informações do Livro</h3>
                    </div>
                    <input type="text" placeholder='Título'/>
                    <input type="text" placeholder='Categoria'/>
                    <input type="text" placeholder='Autor'/>
                    <input type="text" placeholder='Link da Imagem'/>
                    <input className={S.doar} type="submit" value="Doar" />
                </form>
            </section>
        </main>
    )
}