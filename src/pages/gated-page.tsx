import UserListing from "@/features/user/user-listing.tsx";

const GatedPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-2">
            <h1 className="text-2xl">Gated Page</h1>
            <p>This page is restricted to authenticated users only.</p>
            <UserListing />
        </div>
    );
};

export default GatedPage;
