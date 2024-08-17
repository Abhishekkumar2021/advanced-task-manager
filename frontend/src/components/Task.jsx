import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

export default function Task(props){ // props is an object that contains the task object
    const task = props.task
    return (
        <div className="bg-white shadow-md p-6 rounded-md w-96 flex flex-col gap-4 relative">
            {/* status */}
                <div className={task.status === "COMPLETE" ? "bg-green-600 p-1 text-white absolute top-2 right-2 w-24 text-center text-[14px] rounded-md" :  "bg-red-600 rounded-md absolute w-24 text-white text-center text-[14px]  p-1 top-2 right-2"}>
                    {task.status}
                </div>
            <h1 className='font-bold text-xl'>{task.title}</h1>
            {
                task.description.length > 100 ? 
                <p className='text-sm text-zinc-600'>{task.description.substring(0, 100)}...</p> :
                <p className='text-sm text-zinc-600'>{task.description}</p>
            }
            <p>Deadline: <span className='px-3 rounded-full py-1 bg-zinc-800 text-sm text-white'>{task.deadline}</span> </p>
            <Link to={`/tasks/${task.id}`} className='bg-blue-600 text-white px-8 rounded-3xl text-md py-2 mx-auto mt-4 ring ring-blue-600 ring-offset-2 hover:ring-offset-0'>
                Know More
            </Link>
        </div>
    )
}

// PropTypes is a library that helps you to define the type of the props that you are expecting in a component
Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        category: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        }).isRequired,
        deadline: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
    }).isRequired
}