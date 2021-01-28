import React, {useCallback, Suspense} from 'react';
import NavContainer from './containers/NavContainer';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Loading from './components/loading';
import {routes} from './routes';

const App = () => {

  const renderRoutes = useCallback(routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        const { path, exact, component } = route;
        return (
          <Route
            key={index}
            path={path}
            exact={exact}
            component={component}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  },[]);
  return (
    <BrowserRouter>
      <NavContainer/>
      <div>
        <div className="container">
          <div id="pokes" className="pokes">
            <Suspense fallback={<Loading loading={true}/>}>
              {renderRoutes(routes)}
            </Suspense>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
