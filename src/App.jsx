import { Fragment } from 'react';
import Header from '@/componentes/header';
import Main from '@/componentes/section/main';
import Produtos from '@/componentes/section/produtos';
import Destaques from '@/componentes/section/destaques';
import Historia from '@/componentes/section/historia';
import Marcas from '@/componentes/section/marcas';

function App() {
  return (
    <Fragment>
      <Header />
      <Main/>
      <Produtos/>
      <Destaques/>
      <Historia/>
      <Marcas/>
    </Fragment>
  )

}

export default App
