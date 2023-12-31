import './App.css';
import Login from './components/Login'
import Browse from './components/Browse'
import store from './store/appStore'
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ])


  return (
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
