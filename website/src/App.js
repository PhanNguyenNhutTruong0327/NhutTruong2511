
import React from "react";
import { Route, Routes } from "react-router-dom";
import RouterSite from "./router";
import LayoutSite from "./layouts/LayoutSite";
import '../src/assets/sass/app.scss';


function App() {

  return (
    <Routes style={{ height: '100vh', overflowY: 'auto' }}>
      <Route path='/' element={<LayoutSite />}>
        {RouterSite.RouterPublic.map(function (route, index) {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />
        })}
      </Route>
    </Routes>
  );
}

export default App;
