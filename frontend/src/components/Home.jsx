export default function Home() {
  return (
    <div className="w-full bg-taskbg bg-center p-4 flex-1 gap-20 flex flex-col justify-center items-center">
      <div className="text-center">
          <h1 className="text-5xl font-bold mb-10">Stay Organized, Stay Ahead</h1>
          <p className="text-xl mt-2"><span className="text-3xl bg-zinc-800 text-white px-3 rounded-md">Advanced Task Manager</span> - Your Ultimate Tool for Managing Tasks Efficiently</p>
      </div>
        <div className="text-center flex flex-col gap-8 justify-center items-center p-8">
            <h2 className="text-3xl font-bold">Why Choose Advanced Task Manager?</h2>
            <div className="flex justify-center  gap-12 flex-wrap">
                <div className="bg-white p-6 rounded-lg shadow-md w-56">
                    <h3 className="text-2xl font-bold mb-2">Task Prioritization</h3>
                    <p>Organize your tasks by priority and deadlines, so you always know what needs your attention next.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md w-56">
                    <h3 className="text-2xl font-bold mb-2">Reminders & Notifications</h3>
                    <p>Never miss a deadline with customizable reminders and notifications.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md w-56">
                    <h3 className="text-2xl font-bold mb-2">User-Friendly Interface</h3>
                    <p>A clean, intuitive interface that makes task management a breeze.</p>
                </div>
            </div>
        </div>
    </div>
  );
}