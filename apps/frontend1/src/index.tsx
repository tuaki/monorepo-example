import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from ':frontend1/App';

import ':frontend1/styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
