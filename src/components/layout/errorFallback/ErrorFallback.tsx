import React from 'react';
import {useErrorBoundary} from "react-error-boundary";

const ErrorFallback = ({ error }: { error: Error }) => {
    const { resetBoundary } = useErrorBoundary();
    return (
        <div>
            <h2>Something went wrong:</h2>
            <p>{error.message}</p>
            <button onClick={resetBoundary}>ok</button>
        </div>
    );
};

export default ErrorFallback;