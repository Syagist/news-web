import React from 'react';
import ReactDOM from 'react-dom/client';
import {ErrorBoundary} from "react-error-boundary";
import AppRouter from "./AppRouter";
import ErrorFallback from "./components/layout/errorFallback/ErrorFallback";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <AppRouter/>
        </ErrorBoundary>

    </React.StrictMode>
);

