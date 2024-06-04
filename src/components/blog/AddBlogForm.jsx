"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiImage, FiCheckCircle, FiX } from "react-icons/fi";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const AddBlogForm = ({ setblogForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    shortDescription: "",
    description: "",
    image: null,
    team: "",
    techStack: "",
    visibility: "public",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    console.log("Form Data:", formData);

    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Blog added successfully:", result);
        setblogForm(false);
        alert("Blog created successfully");
      } else {
        console.error("Error adding blog");
        alert("Error adding blog. Please try again.");
      }
    } catch (error) {
      console.error("Error adding blog:", error);
      alert("Error adding blog. Please try again.");
    }
  };

  return (
    <motion.div
      className="absolute min-h-screen bg-gray-200 inset-0 z-50 h-full w-full overflow-y-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <button
        className="absolute top-0 right-0 m-4"
        onClick={() => setblogForm(false)}
      >
        <FiX className="text-gray-500 hover:text-gray-700 cursor-pointer" />
      </button>
      <form
        onSubmit={handleSubmit}
        className="p-8 rounded grid grid-cols-4 gap-4"
      >
        <div className="col-span-3">
          <h2 className="text-xl font-bold mb-4">Add New Blog</h2>
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="font-semibold mb-2">
              Blog Title
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-blue-500 text-sm text-gray-700 placeholder-gray-400"
              placeholder="Enter blog title..."
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="shortDescription" className="font-semibold mb-2">
              Short Description
            </label>
            <textarea
              id="shortDescription"
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-blue-500 text-sm text-gray-700 placeholder-gray-400"
              placeholder="Enter short description..."
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="description" className="font-semibold mb-2">
              Description
            </label>
            <div className="bg-white rounded-lg">
              <ReactQuill
                id="description"
                value={formData.description}
                onChange={(value) =>
                  setFormData({ ...formData, description: value })
                }
                className="px-4 py-3 mb-4 h-56 w-full focus:outline-none focus:border-blue-500 text-sm text-gray-700 placeholder-gray-400"
                placeholder="Enter blog description..."
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col ml-4">
          <div className="flex flex-col mb-4">
            <label htmlFor="image" className="font-semibold mb-2">
              Image
            </label>
            <div className="border border-gray-300 rounded-lg px-3 py-2 flex items-center">
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
                required
              />
              <label
                htmlFor="image"
                className="cursor-pointer flex items-center"
              >
                <FiImage className="mr-2" /> Upload Image
              </label>
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="team" className="font-semibold mb-2">
              Category
            </label>
            <select
              id="team"
              name="team"
              value={formData.team}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-blue-500 text-sm text-gray-700 placeholder-gray-400"
              required
            >
              <option value="tech">Tech</option>
              <option value="non-tech">Non-Tech</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="techStack" className="font-semibold mb-2">
              Date
            </label>
            <input
              type="date"
              id="techStack"
              name="techStack"
              value={formData.techStack}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-blue-500 text-sm text-gray-700 placeholder-gray-400"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="visibility" className="font-semibold mb-2">
              Visibility
            </label>
            <select
              id="visibility"
              name="visibility"
              value={formData.visibility}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-blue-500 text-sm text-gray-700 placeholder-gray-400"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
        </div>
        <div className="col-span-4 flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <FiCheckCircle className="mr-2" /> Add Blog
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AddBlogForm;
