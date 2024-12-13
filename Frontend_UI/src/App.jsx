import { Route, Routes } from 'react-router'
import AddCamel from './pages/AddCamel'
import EditCamel from './pages/EditCamel'
import ViewSingleCamel from './pages/ViewSingleCamel'
import CamelHistory from './pages/CamelHistory'
import DeleteConformModal from './components/DeleteConformModal'

function App() {

  return (
    <>
      <DeleteConformModal />
      <Routes>
        <Route path='/' element={<CamelHistory />}></Route>
        <Route path='/add' element={<AddCamel />}></Route>
        <Route path='/edit/:id' element={<EditCamel />}></Route>
        <Route path='/single/:id' element={<ViewSingleCamel />}></Route>
      </Routes>
    </>
  )
}

export default App;
