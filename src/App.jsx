import TheBoard from './components/TheBoard';
import Main from './components/layouts/Main/Main';
import TheNavbar from './components/layouts/TheNavbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserProvider } from './context/userContext';
import styles from './App.module.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/play',
    element: <TheBoard />
  }
])

function App() {
  return (
    <UserProvider>
      <div className={styles.container}>
        <TheNavbar />
        <RouterProvider router={router}/>
      </div>
    </UserProvider>
  )
}

export default App
