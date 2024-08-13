import {Link} from 'react-router-dom'
export default function Error() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-zinc-100">
            <h1 className="text-9xl mb-3">
                404 !
            </h1>
            <p className="text-4xl mb-12">Page not found.</p>
            <Link to="/" className="text-2xl bg-zinc-900 text-white px-5 py-2 rounded-lg hover:bg-zinc-600 active:scale-95">Go back to home</Link>
        </div>
    );
}