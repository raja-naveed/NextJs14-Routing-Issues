"use client"
import { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaPhone, FaSave, FaMapMarkerAlt, FaCamera } from 'react-icons/fa';

function SettingsPage() {
    const [profile, setProfile] = useState({
        username: 'john_doe',
        email: 'john.doe@example.com',
        phone: '+123456789',
        address: '123 Main St, Anytown, USA',
        profilePicture: '/images/sir.png',
    });

    const [passwords, setPasswords] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });

    const handleProfileChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setPasswords({ ...passwords, [e.target.name]: e.target.value });
    };

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfile({ ...profile, profilePicture: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const saveProfile = () => {
        // Add logic to save profile information
        console.log('Profile saved', profile);
    };

    const changePassword = () => {
        // Add logic to change password
        console.log('Password changed', passwords);
    };

    return (
        <div>
            <main className="flex-1 p-6">
                <h1 className="text-3xl font-semibold text-gray-700 dark:text-white">User Profile Settings</h1>
                <div className="mt-8 space-y-8">
                    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">Profile Information</h2>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                                <div className="relative">
                                    <img
                                        src={profile.profilePicture}
                                        alt="Profile"
                                        className="h-20 w-20 rounded-full object-cover"
                                    />
                                    <label className="absolute bottom-0 right-0 bg-gray-800 text-white p-1 rounded-full cursor-pointer">
                                        <FaCamera />
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleProfilePictureChange}
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="flex items-center mt-4">
                                <FaUser className="text-xl text-gray-700 dark:text-gray-300" />
                                <input
                                    type="text"
                                    name="username"
                                    value={profile.username}
                                    onChange={handleProfileChange}
                                    className="ml-4 p-2 border border-gray-300 dark:border-gray-700 rounded-lg flex-1 dark:bg-gray-800 dark:text-gray-300"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="text-xl text-gray-700 dark:text-gray-300" />
                                <input
                                    type="email"
                                    name="email"
                                    value={profile.email}
                                    onChange={handleProfileChange}
                                    className="ml-4 p-2 border border-gray-300 dark:border-gray-700 rounded-lg flex-1 dark:bg-gray-800 dark:text-gray-300"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="flex items-center">
                                <FaPhone className="text-xl text-gray-700 dark:text-gray-300" />
                                <input
                                    type="text"
                                    name="phone"
                                    value={profile.phone}
                                    onChange={handleProfileChange}
                                    className="ml-4 p-2 border border-gray-300 dark:border-gray-700 rounded-lg flex-1 dark:bg-gray-800 dark:text-gray-300"
                                    placeholder="Phone"
                                />
                            </div>
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="text-xl text-gray-700 dark:text-gray-300" />
                                <input
                                    type="text"
                                    name="address"
                                    value={profile.address}
                                    onChange={handleProfileChange}
                                    className="ml-4 p-2 border border-gray-300 dark:border-gray-700 rounded-lg flex-1 dark:bg-gray-800 dark:text-gray-300"
                                    placeholder="Address"
                                />
                            </div>
                            <button
                                onClick={saveProfile}
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                <FaSave className="inline mr-2" /> Save Profile
                            </button>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">Change Password</h2>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                                <FaLock className="text-xl text-gray-700 dark:text-gray-300" />
                                <input
                                    type="password"
                                    name="currentPassword"
                                    value={passwords.currentPassword}
                                    onChange={handlePasswordChange}
                                    className="ml-4 p-2 border border-gray-300 dark:border-gray-700 rounded-lg flex-1 dark:bg-gray-800 dark:text-gray-300"
                                    placeholder="Current Password"
                                />
                            </div>
                            <div className="flex items-center">
                                <FaLock className="text-xl text-gray-700 dark:text-gray-300" />
                                <input
                                    type="password"
                                    name="newPassword"
                                    value={passwords.newPassword}
                                    onChange={handlePasswordChange}
                                    className="ml-4 p-2 border border-gray-300 dark:border-gray-700 rounded-lg flex-1 dark:bg-gray-800 dark:text-gray-300"
                                    placeholder="New Password"
                                />
                            </div>
                            <div className="flex items-center">
                                <FaLock className="text-xl text-gray-700 dark:text-gray-300" />
                                <input
                                    type="password"
                                    name="confirmNewPassword"
                                    value={passwords.confirmNewPassword}
                                    onChange={handlePasswordChange}
                                    className="ml-4 p-2 border border-gray-300 dark:border-gray-700 rounded-lg flex-1 dark:bg-gray-800 dark:text-gray-300"
                                    placeholder="Confirm New Password"
                                />
                            </div>
                            <button
                                onClick={changePassword}
                                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
                            >
                                <FaSave className="inline mr-2" /> Change Password
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default SettingsPage;
