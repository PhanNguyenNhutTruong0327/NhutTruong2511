
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouterSite from "./router";
import LayoutSite from "./layouts/LayoutSite";
import '../src/assets/sass/app.scss';
import LayoutAdmin from "./layouts/LayoutAdmin";


function App() {

  return (
      <Routes>
        <Route path="/" element={<LayoutSite />}>
          {RouterSite.RouterPublic.map(function (router, index) {
            const Page = router.component;
            return (
              <Route key={index} path={router.path} element={<Page />} />
            )
          })

          }
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          {RouterSite.RouterPrivate.map(function (router, index) {
            const Page = router.component;
            return (
              <Route key={index} path={router.path} element={<Page />} />
            )
          })
          }
        </Route>
      </Routes>
  );
}

export default App;
