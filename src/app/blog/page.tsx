"use client"
import React, { useState } from 'react';
import { FaTrash, FaPlus } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import AddBlogForm from '@/components/blog/AddBlogForm';


const projects = [
    {
        id: 1,
        name: 'Project 1',
        description: 'Description of Project 1',
        teamMembers: ['John Doe', 'Jane Smith'],
        techStack: ['React', 'Next.js', 'Tailwind CSS'],
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        name: 'Project 2',
        description: 'Description of Project 2',
        teamMembers: ['Alice Johnson', 'Bob Brown'],
        techStack: ['React Native', 'Node.js', 'MongoDB'],
        image: 'https://via.placeholder.com/150',
    },
];


const ProjectPage = () => {
    const [projectList, setProjectList] = useState(projects);
    const [blogform, setblogForm] = useState(false);

    const handleDelete = (projectId:number) => {
        setProjectList(prevState => prevState.filter(project => project.id !== projectId));
    };



    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl text-white font-extrabold tracking-widest uppercase">All Blogs</h2>
                {!blogform && (
                    <button onClick={() => setblogForm(true)} className="flex items-center bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <FaPlus className="mr-2" /> Blog
                    </button>
                )}
            </div>
            <AnimatePresence>

            {blogform && <AddBlogForm setblogForm={setblogForm}  />}
            </AnimatePresence>
            <div className="overflow-x-auto rounded-2xl">
                <table className="table-auto w-full border-collapse rounded-2xl border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Project Name</th>
                            <th className="border border-gray-300 px-4 py-2">Content</th>
                            <th className="border border-gray-300 px-4 py-2">Excert</th>
                            <th className="border border-gray-300 px-4 py-2">Catogery</th>
                                                        <th className="border border-gray-300 px-4 py-2">Visibility</th>

                                                        <th className="border border-gray-300 px-4 py-2">Image</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projectList.map(project => (
                            <tr key={project.id} className="bg-white">
                                <td className="border border-gray-300 px-4 py-2">{project.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{project.description}</td>
                                <td className="border border-gray-300 px-4 py-2">{project.teamMembers.join(', ')}</td>
                                <td className="border border-gray-300 px-4 py-2">{project.techStack.join(', ')}</td>
                                                                <td className="border border-gray-300 px-4 py-2">{project.techStack.join(', ')}</td>

                                                                <td className="border border-gray-300 px-4 py-2">           <img src="images/sir.png" className="h-8 w-8"/>
</td>

                                <td className="border border-gray-300 px-4 py-2">
                                    <button onClick={() => handleDelete(project.id)} className="flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                        <FaTrash className="mr-2" /> 
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProjectPage;
