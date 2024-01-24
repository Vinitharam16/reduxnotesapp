import { useSelector } from 'react-redux';
import './App.css';
// import Applayout from './AppLayout/Applayout';
import { AuthenticatedRoutes, AutheticationRoutes } from './Routes';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import app from './Pages/app';


function App() {
  const { isLoggedIn } = useSelector((state)=>(state.authreducer));


  function renderRoutes(isLoggedIn = false) {
    if (!isLoggedIn) {
      return (
        <Fragment>
          {
            AutheticationRoutes.map((route, index) => (
              <Route key={index} path={route.path} Component={route.component} />
            ))
          }
        </Fragment>
      );
    }
    else {
      return (
        <Fragment>
          <Route Component={app}>
            {
              AuthenticatedRoutes.children.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  Component={route.component}
                />
              ))}
          </Route>
        </Fragment>
      )
    }
  }

  return (
    <div className="App">
      <Routes>
        {renderRoutes(isLoggedIn)}
      </Routes>
      {/* <Applayout /> */}
    </div>
  );
}

export default App;
