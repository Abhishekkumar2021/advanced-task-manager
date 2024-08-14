import Category from "../components/Category"

export default function Categories() {
    // Fetch all categories from the backend
    // Display all of them

    const categories = [
        {
            id: "1",
            title: `Lorem Ipsum`,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            tasks: 10,
            completed: 5,
            createdAt: new Date().toDateString(),
            updatedAt: new Date().toDateString(),
        },
        {
            id: "2",
            title: `Lorem Ipsum`,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            tasks: 10,
            completed: 5,
            createdAt: new Date().toDateString(),
            updatedAt: new Date().toDateString(),
        },
        {
            id: "1",
            title: `Lorem Ipsum`,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            tasks: 10,
            completed: 5,
            createdAt: new Date().toDateString(),
            updatedAt: new Date().toDateString(),
        },
        {
            id: "2",
            title: `Lorem Ipsum`,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            tasks: 10,
            completed: 5,
            createdAt: new Date().toDateString(),
            updatedAt: new Date().toDateString(),
        },
        {
            id: "1",
            title: `Lorem Ipsum`,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            tasks: 10,
            completed: 5,
            createdAt: new Date().toDateString(),
            updatedAt: new Date().toDateString(),
        },
        {
            id: "2",
            title: `Lorem Ipsum`,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            tasks: 10,
            completed: 5,
            createdAt: new Date().toDateString(),
            updatedAt: new Date().toDateString(),
        }
    ]

    return (
        <div className=" flex flex-col items-center p-8">
            <h1 className="text-3xl bg-zinc-800 text-white px-12 py-3 text-center">
                All Categories
            </h1>
            <div className="flex gap-8 mt-6 flex-wrap justify-center">
                {
                    categories.map((category) => {
                        return <Category key={category.id} category={category} />
                    })
                }
            </div>
        </div>
    )
}