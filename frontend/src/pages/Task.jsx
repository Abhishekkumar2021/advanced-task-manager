//  /tasks/:id

import { Link, useParams } from "react-router-dom"
import { TbTargetArrow } from "react-icons/tb";

export default function Task() {
    // Data will be going to fetched from the backend itself
    const params = useParams()
    const id = params.id
    const task = {
        id: id,
        title: 'Task 1',
        description: 'This is the first task',
        status: 'PENDING',
        category: {
            id: '1',
            title: 'Category 1',
        },
        deadline: new Date().toDateString(),
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
    }

    return (
        <div className='flex-1 p-8 flex flex-col items-center gap-6'>
        <div className="relative w-full flex justify-center">
            <h1 className='text-3xl bg-zinc-800 text-white px-12 py-3 text-center'>{task.title}</h1>
            <p className="absolute top-0 right-0 flex items-center gap-2 font-bold border-4 border-black p-3 rounded-md">
                <TbTargetArrow size={30} /> {task.deadline}
            </p>
        </div>
        <div className='flex flex-1 w-full gap-2 flex-col items-center'>
            <div className='w-4/6 p-8'>
                <h2 className='font-bold text-2xl mb-2 '>
                    About {task.title}
                </h2>
                <p className='text-md bg-white shadow-md rounded-md p-4'>
                    {task.description}
                </p>
            </div>
            <div className='w-4/6 p-8'>
                <h2 className='font-bold text-2xl mb-2'>
                    Stats
                </h2>
                <div className='flex gap-5 flex-wrap'>
                    <div className='p-3 shadow-md bg-white rounded-md w-64'>
                        <h3 className='text-xl'>
                            Status
                        </h3>
                        <p className={task.status === 'COMPLETE' ? "text-3xl mt-2 text-green-600" : "text-3xl mt-2 text-red-600"}>
                            {task.status}
                        </p>
                    </div> 
                    <div className='p-3 shadow-md bg-white rounded-md w-64'>
                        <h3 className='text-xl'>
                            Created at
                        </h3>
                        <p className='text-2xl mt-2 text-green-600'>
                            {task.createdAt}
                        </p>
                    </div>
                    <div className='p-3 shadow-md bg-white rounded-md w-64'>
                        <h3 className='text-xl'>
                            Updated at
                        </h3>
                        <p className='text-2xl mt-2 text-green-600'>
                            {task.updatedAt}
                        </p>
                    </div>
                    <div className='p-3 shadow-md bg-white rounded-md w-64'>
                        <h3 className='text-xl mb-2'>
                            Category
                        </h3>
                        <Link to={`/categories/${task.category.id}`} className='text-blue-600 text-2xl hover:underline'>
                            {task.category.title}
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
    )
}