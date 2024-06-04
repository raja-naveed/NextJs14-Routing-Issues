const teamMembers = [
    { name: 'Ahmed Masroor', role: 'CEO', image: '/images/sir.png' },
    { name: 'Aniq', role: 'Lead Developer', image: '/images/1.jpg' },
    { name: 'Insharah', role: 'Project Manager', image: '/images/1.jpg' },
    { name: 'Asad Khan', role: 'Backend Expert', image: '/images/1.jpg' },
    { name: 'Ali Ahmed', role: 'Software Engineer', image: '/images/1.jpg' },
];

function TeamPage() {
    return (
        <div>
            <main className="flex-1 p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-semibold text-gray-700 dark:text-white">Team Members</h1>
                    <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        Add New Member
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
                            <div className="flex flex-col items-center">
                                <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full" />
                                <div className="mt-4 text-center">
                                    <p className="text-xl font-semibold text-gray-700 dark:text-white">{member.name}</p>
                                    <p className="text-gray-500 dark:text-gray-400">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default TeamPage;
