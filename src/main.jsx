import { createRoot } from 'react-dom/client'
import Router from './routes'

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";

import {store} from './store'
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
      <Provider store={store}>
            <Router />
      </Provider>
    
)
