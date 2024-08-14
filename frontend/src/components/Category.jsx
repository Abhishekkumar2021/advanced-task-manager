import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
export default function Category(props){ // props is an object that contains the category object
    const category = props.category
    return (
        <div className="bg-white shadow-md p-6 rounded-md w-96 flex flex-col gap-4">
            <h1 className='font-bold text-xl'>{category.title}</h1>
            {
                category.description.length > 100 ? 
                <p className='text-sm text-zinc-600'>{category.description.substring(0, 100)}...</p> :
                <p className='text-sm text-zinc-600'>{category.description}</p>
            }
            <p><span className='px-3 rounded-full py-1 bg-zinc-800 text-white'>{category.completed}</span> out of <span className='px-3 rounded-full py-1 bg-zinc-800 text-white'>{category.tasks}</span> tasks completed</p>
            <Link to={`/categories/${category.id}`} className='bg-zinc-800 text-white px-8 rounded-3xl text-sm py-2 mx-auto mt-6'>
                Know More
            </Link>
        </div>
    )
}

// PropTypes is a library that helps you to define the type of the props that you are expecting in a component
Category.propTypes = {
    category: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tasks: PropTypes.number.isRequired,
        completed: PropTypes.number.isRequired,
        createdAt: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
    }).isRequired
}