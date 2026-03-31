import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from ':frontend2/App';

import ':frontend2/styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
