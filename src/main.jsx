import React from 'react'
import ReactDOM from 'react-dom/client'
import Index  from './layout/Index.jsx'
import Auth0ProviderWithNavigare from './layout/Auth0ProviderWithNavigate.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0ProviderWithNavigare>
    <Index />
    </Auth0ProviderWithNavigare>
  </React.StrictMode>
);