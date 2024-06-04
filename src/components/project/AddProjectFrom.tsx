"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiImage, FiCheckCircle, FiX } from 'react-icons/fi';


const AddProjectForm = ({ setShowForm }: { setShowForm: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [team , setTeam] = useState('');
    const [techStack, setTechStack] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitted:', { name, description, image });
    };

    return (
        <motion.div className="absolute min-h-screen bg-gray-200 inset-0 z-50 h-full w-full overflow-y-auto "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
        >
            <button className="absolute top-0 right-0 m-4" onClick={() => setShowForm(false)}>
                <FiX className="text-gray-500 hover:text-gray-700 cursor-pointer" />
            </button>
            <div className="p-8 rounded  grid grid-cols-3 gap-4 ">
                <div className="col-span-2">
                    <h2 className="text-xl font-bold mb-4">Add New Project</h2>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="name" className="font-semibold mb-2">Project Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-blue-500 text-sm text-gray-700 placeholder-gray-400"
                            placeholder="Enter project name..."
                            required
                        />

                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="description" className="font-semibold mb-2">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="border border-gray-300 rounded-lg px-4 py-3 h-64 mb-4 w-full resize-none focus:outline-none focus:border-blue-500 text-sm text-gray-700 placeholder-gray-400"
                            placeholder="Enter project description..."
                            required
                            style={{ minHeight: '10rem' }} // Adjust min-height here
                        ></textarea>


                    </div>
                </div>
                <div className="col-span-1 flex flex-col  mt-8">
                    <div className="flex flex-col mb-4">
                        <label htmlFor="image" className="font-semibold mb-2">Image</label>
                        <div className="border border-gray-300 rounded-lg px-3 py-2 flex items-center">
                            <input
                                type="file"
                                id="image"
                                onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                                className="hidden"
                                accept="image/*"
                                required
                            />
                            <label htmlFor="image" className="cursor-pointer flex items-center">
                                <FiImage className="mr-2" /> Upload Image
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="team" className="font-semibold mb-2">Team</label>
                        <input
                            type="text"
                            id="team"
                            value={team}
                            onChange={(e) => setTeam(e.target.value)}
                            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-blue-500 text-sm text-gray-700 placeholder-gray-400"
                            placeholder="Enter project team..."
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="tech" className="font-semibold mb-2">Tech Stack</label>
                        <input
                            type="text"
                            id="tech"
                            value={techStack}
                            onChange={(e) => setTechStack(e.target.value)}
                            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-blue-500 text-sm text-gray-700 placeholder-gray-400"
                            placeholder="Enter project tech stack..."
                            required
                        />
                    </div>
                    {/* Add other fields and options here */}
                    <div className="flex items-center justify-center mt-40">
                        <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center">
                            <FiCheckCircle className="mr-2" /> Add Project
                        </button>
                    </div>
                </div>

            </div>

        </motion.div>
    );
};

export default AddProjectForm