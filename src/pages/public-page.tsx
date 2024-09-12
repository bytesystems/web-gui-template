

const PublicPage = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl">Public Page</h1>
                <p>This page is accessible to everyone.</p>
                <p className="text-blue-600/100">The quick brown fox...</p>
                <p className="text-blue-600/75">The quick brown fox...</p>
                <p className="text-blue-600/50">The quick brown fox...</p>
                <p className="text-blue-600/25">The quick brown fox...</p>
                <p className="text-blue-600/0">The quick brown fox...</p>
            </div>
        </>
    );
};

export default PublicPage;
