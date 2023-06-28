import '@/componentes/section/marcas/marcas.css'
import Destaque1 from '@/img/destaque1.png';
import Destaque2 from '@/img/destaque2.png';
import Destaque3 from '@/img/destaque3.png';
import Titulo from "@/componentes/commons/Titulo";
import Titulo2 from "@/componentes/commons/Titulo2";
import Tenis from "@/img/tenis_grande.png"

const produtos = [
    {
        title: 'Basketball',
        img: Destaque1
    },
    {
        title: 'LifeStyle',
        img: Destaque2
    }, {
        title: 'Performance',
        img: Destaque3
    },
]

export default function Marcas() {
    return (
        <section>
            <div className="marcas-container">
              marcas marcas marcas 
              </div>
        </section>
        // <section>
        //     <div className="destaques-container borda">
        //         {produtos.map((produto) => (
        //             <div key={produto.title} className='container'>
        //                 <div>
        //                     <div className='titulosDestaques'>{produto.title}</div>
        //                     <img className='imgDestaques' src={produto.img} alt={produto.title} />
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        // </section>
    );
}

