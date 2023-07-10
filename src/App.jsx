import React, { Fragment, useEffect, useState } from 'react';
import Header from '@/componentes/header';
import Main from '@/componentes/section/main';
import Produtos from '@/componentes/section/produtos';
import Destaques from '@/componentes/section/destaques';
import Historia from '@/componentes/section/historia';
import FAQ from '@/componentes/section/FAQ';
import Marcas from '@/componentes/section/marcas';
import About from '@/componentes/section/about';
import Formulario from '@/componentes/section/formulario';



// import Testemonials from '@/componentes/section/testemonials';


const App = () => {

  const ENDPOINT = "https://raw.githubusercontent.com/LuaCristina/projeto-snikers/master/backend/projeto-snickers.json"

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(ENDPOINT)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Erro ao fazer a requisição:', error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      {
        isLoading ? (
          <p>Carregando...</p>
        ) : (
         
<Fragment>
            <Header data={data.header} />
            <Main data={data.main} />
            <Produtos data={data.products} />
            <Destaques data={data.topweek} />
            <Historia data={data.hightlight} />
            <Marcas data={data.trademarks} />
            <div className='divisoria'>
              <div style={{ width: '50%', height: '100%'  }}>
                <About data={data.about} />
              </div>
              <div style={{ width: '50%', height: '100%'  }}>
                <FAQ data={data.faq} />
              </div>
            </div>
            <div className='divisoriaForm'>
              <div style={{ width: '50%', height: '100%'  }}>
                <Formulario data={data.about} />
              </div>
              <div style={{ width: '50%', height: '100%'  }}>
                <FAQ data={data.faq} />
              </div>
            </div>
          </Fragment>
        )
      }
    </div>
  )
}

export default App
