import React from 'react';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[300px] text-center">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <p className="text-2xl mt-4">Page Not Found</p>
            <p className="mt-2">Sorry, the page you're looking for doesn't exist.</p>
        </div>
    );
};

export default ErrorPage;