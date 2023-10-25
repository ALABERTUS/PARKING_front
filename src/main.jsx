/*import React from 'react'
import ReactDOM from 'react-dom/client'
import Index  from './layout/Index.jsx'
import Auth0ProviderWithNavigate from './layout/Auth0ProviderWithNavigate.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0ProviderWithNavigate>
    <Index />
    </Auth0ProviderWithNavigate>
  </React.StrictMode>
);
*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Index';
import Auth0ProviderWithNavigate from './layout/Auth0ProviderWithNavigate.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Auth0ProviderWithNavigate>
      <RouterProvider router={router} />
    </Auth0ProviderWithNavigate>
  </React.StrictMode>
);