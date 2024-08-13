import { useParams } from 'react-router-dom';

export default function Category() {
    const params = useParams()
    const id = params.id

    // Data fetching logic here
    const category = {
        id: id,
        title: `Lorem Ipsum`,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        tasks: 10,
        completed: 5,
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
    }

    return (
        <div className='flex-1 p-8 flex flex-col items-center gap-6'>
            <h1 className='rounded-md shadow-md bg-white text-3xl font-bold px-5 py-2'>{category.title}</h1>
            <div className='flex flex-1 w-full gap-2 flex-col items-center'>
                <div className='w-4/6 p-8'>
                    <h2 className='font-bold text-2xl mb-2 '>
                        About {category.title}
                    </h2>
                    <p className='text-md bg-white shadow-md rounded-md p-4'>
                        {category.description}
                    </p>
                </div>
                <div className='w-4/6 p-8'>
                    <h2 className='font-bold text-2xl mb-2'>
                        Stats
                    </h2>
                    <div className='flex gap-5 flex-wrap'>
                        <div className='p-3 shadow-md bg-white rounded-md w-64'>
                            <h3 className='text-xl'>
                                Total number of task in this category
                            </h3>
                            <p className='text-3xl mt-2 text-green-600'>
                                {category.tasks}
                            </p>
                        </div>
                        <div className='p-3 shadow-md bg-white rounded-md w-64'>
                            <h3 className='text-xl'>
                                Number of completed tasks
                            </h3>
                            <p className='text-3xl mt-2 text-green-600'>
                                {category.tasks}
                            </p>
                        </div>
                        <div className='p-4 shadow-md bg-white rounded-md w-64'>
                            <h3 className='text-xl'>
                                Number of pending tasks
                            </h3>
                            <p className='text-3xl mt-2 text-green-600'>
                                {category.tasks}
                            </p>
                        </div>
                        <div className='p-3 shadow-md bg-white rounded-md w-64'>
                            <h3 className='text-xl'>
                                Created at
                            </h3>
                            <p className='text-2xl mt-2 text-green-600'>
                                {category.createdAt}
                            </p>
                        </div>
                        <div className='p-3 shadow-md bg-white rounded-md w-64'>
                            <h3 className='text-xl'>
                                Updated at
                            </h3>
                            <p className='text-2xl mt-2 text-green-600'>
                                {category.updatedAt}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}