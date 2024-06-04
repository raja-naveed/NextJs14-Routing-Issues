// pages/admin/index.js
import { FaChartLine, FaUsers, FaUser, FaFileAlt, FaProjectDiagram, FaServicestack, FaBuilding, FaBlog } from 'react-icons/fa';


function AdminPage() {
    return (
        <div>
            <main className="flex-1 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
                        <div className="flex items-center">
                            <FaProjectDiagram className="text-4xl text-blue-500" />
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-gray-700 dark:text-white">Projects</p>
                                <p className="text-gray-500 dark:text-gray-400">Total</p>
                                <p className="text-2xl font-bold text-gray-700 dark:text-white">15</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
                        <div className="flex items-center">
                            <FaServicestack className="text-4xl text-green-500" />
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-gray-700 dark:text-white">Services</p>
                                <p className="text-gray-500 dark:text-gray-400">Offered</p>
                                <p className="text-2xl font-bold text-gray-700 dark:text-white">10</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
                        <div className="flex items-center">
                            <FaBuilding className="text-4xl text-yellow-500" />
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-gray-700 dark:text-white">Startups</p>
                                <p className="text-gray-500 dark:text-gray-400">Incubated</p>
                                <p className="text-2xl font-bold text-gray-700 dark:text-white">3</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
                        <div className="flex items-center">
                            <FaBlog className="text-4xl text-red-500" />
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-gray-700 dark:text-white">Blog Posts</p>
                                <p className="text-gray-500 dark:text-gray-400">Published</p>
                                <p className="text-2xl font-bold text-gray-700 dark:text-white">25</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
                        <div className="flex items-center">
                            <FaUsers className="text-4xl text-purple-500" />
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-gray-700 dark:text-white">Team Members</p>
                                <p className="text-gray-500 dark:text-gray-400">Total</p>
                                <p className="text-2xl font-bold text-gray-700 dark:text-white">12</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">Recent Activities</h2>
                        <ul className="mt-4 space-y-4">
                            <li className="flex items-start">
                                <div className="flex-shrink-0 bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center text-white">
                                    <FaUser />
                                </div>
                                <div className="ml-4">
                                    <p className="text-gray-700 dark:text-gray-300">
                                        <span className="font-semibold">John Doe</span> commented on your post.
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 bg-green-500 rounded-full h-10 w-10 flex items-center justify-center text-white">
                                    <FaFileAlt />
                                </div>
                                <div className="ml-4">
                                    <p className="text-gray-700 dark:text-gray-300">
                                        <span className="font-semibold">New report</span> has been generated.
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">5 hours ago</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 bg-yellow-500 rounded-full h-10 w-10 flex items-center justify-center text-white">
                                    <FaChartLine />
                                </div>
                                <div className="ml-4">
                                    <p className="text-gray-700 dark:text-gray-300">
                                        <span className="font-semibold">Sales</span> have increased by 20%.
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">8 hours ago</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AdminPage;
