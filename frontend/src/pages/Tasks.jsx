import Task from "../components/Task"

export default function Tasks() {
    // Data will be going to fetched from the backend itself

    const tasks = [
        {
            id: "1",
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
        }, 
        {
            id: "2",
            title: 'Task 2',
            description: 'This is the second task',
            status: 'COMPLETE',
            category: {
                id: '2',
                title: 'Category 2',
            },
            deadline: new Date().toDateString(),
            createdAt: new Date().toDateString(),
            updatedAt: new Date().toDateString(),
        },
        {
            id: "3",
            title: 'Task 3',
            description: 'This is the third task',
            status: 'COMPLETE',
            category: {
                id: '3',
                title: 'Category 3',
            },
            deadline: new Date().toDateString(),
            createdAt: new Date().toDateString(),
            updatedAt: new Date().toDateString(),
        },
        {
            id: "4",
            title: 'Task 4',
            description: 'This is the fourth task',
            status: 'PENDING',
            category: {
                id: '4',
                title: 'Category 4',
            },
            deadline: new Date().toDateString(),
            createdAt: new Date().toDateString(),
            updatedAt: new Date().toDateString(),
        }
    ]
    return (
        <div className="flex flex-col items-center p-8">
            <h1 className="text-3xl bg-zinc-800 text-white px-12 py-3 text-center">
                All Tasks
            </h1>
            <div className="flex gap-8 mt-6 flex-wrap justify-center">
                {
                    tasks.map((task) => {
                        return <Task key={task.id} task={task} />
                    })
                }
            </div>
        </div>
    )
}