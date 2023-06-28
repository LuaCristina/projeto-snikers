import { Fragment } from 'react';
import Header from '@/componentes/header';
import Main from '@/componentes/section/main';
import Produtos from '@/componentes/section/produtos';
import Historia from '@/componentes/section/historia';

function App() {
  return (
    <Fragment>
      <Header />
      <Main/>
      <Produtos/>
      <Historia/>
    </Fragment>
  )

}

export default App
