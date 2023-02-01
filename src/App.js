import React, { Suspense, lazy } from "react";
import "./App.css";
import {
  Route,
  Switch,
  Redirect,
  HashRouter as Router,
} from "react-router-dom";
import { Provider } from "react-redux";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faUserCircle,
  faKey,
  faUnlock,
  faCheck,
  faEdit,
  faTrashAlt,
  faPlus,
  faSearch,
  faBackward,
  faPlusSquare,
  faBars,
  faCar,
  faSearchPlus,
  faUser,
  faQuestionCircle,
  faChevronDown,
  faLightbulb,
  faCartPlus,
  faTimes,
  faShoppingCart,
  faPaperPlane,
  faFile,
  faFileUpload,
  faUndo,
  faFileExport,
  faFileDownload,  
  faCamera,
  faArrowLeft,
  faArrowDown,
  faExclamationTriangle,
  faEraser,
  faArrowRight,
  faSave
} from "@fortawesome/free-solid-svg-icons/";
import configureStore from "./store";

import Loading from './common/loading';

const store = configureStore();

const User = lazy(() => import("./components/user"));

library.add(
  faUserCircle,
  faKey,
  faUnlock,
  faCheck,
  faEdit,
  faTrashAlt,
  faPlus,
  faSearch,
  faBackward,
  faPlusSquare,
  faBars,
  faCar,
  faSearchPlus,
  faUser,
  faQuestionCircle,
  faChevronDown,
  faLightbulb,
  faCartPlus,
  faTimes,
  faShoppingCart,
  faPaperPlane,
  faFile,
  faFileUpload,
  faUndo,
  faFileDownload,
  faFileExport,
  faCamera,
  faArrowLeft,
  faArrowDown,
  faExclamationTriangle,
  faEraser,
  faArrowRight,
  faCartPlus,
  faSave
);
dom.watch();

const App = () => (
  <>
    <Router>

       <Suspense fallback={<Loading />}>
        <Switch>
          <Provider store={store}>

           
                            <Route exact path="/" component={User} />
              <Route
                exact
                                path="/user"
                render={(props) => <User {...props} />}
              />
             
     
          </Provider>
        </Switch>
      </Suspense>

    </Router>
  </>
);

export default App;
