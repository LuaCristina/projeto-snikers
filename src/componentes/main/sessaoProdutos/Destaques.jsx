import '/Users/laura/IFTM/JS/projetoplayinssnk/src/componentes/main/sessaoProdutos/destaques.css';
import Destaque1 from '/Users/laura/IFTM/JS/projetoplayinssnk/src/img/destaque1.png';
import Destaque2 from '/Users/laura/IFTM/JS/projetoplayinssnk/src/img/destaque2.png';
import Destaque3 from '/Users/laura/IFTM/JS/projetoplayinssnk/src/img/destaque3.png';

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

export default function Destaques() {
    return (
        <div className="destaques-container borda">
            {produtos.map((produto) => (
                <div key={produto.title} className='container'>
                    <div>
                        <div className='titulosDestaques'>{produto.title}</div>
                        <img className='imgDestaques' src={produto.img} alt={produto.title} />
                    </div>
                </div>
            ))}
        </div>
    );
}

