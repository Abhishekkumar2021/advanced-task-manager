import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
    return (
        <nav className="flex p-3 shadow-md justify-between items-center bg-white">
            <Link to="/" className='flex gap-2 items-center'>
                <img src={logo} alt="website logo" className='w-14 rounded-full' />
                <h1 className='text-3xl font-bold'>
                Advanced Task Manager
            </h1>
            </Link>

            <div className="flex gap-2 text-lg items-center">
                <Link to="/tasks" className='bg-zinc-800 text-white px-3 py-1 rounded-lg hover:bg-zinc-600 active:scale-95'>Tasks</Link>
                <Link to="/categories" className='bg-zinc-800 text-white px-3 py-1 rounded-lg hover:bg-zinc-600 active:scale-95'>Categories</Link>
            </div>
        </nav>
    )
}