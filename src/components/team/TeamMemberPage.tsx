import { FaUser, FaEnvelope, FaPhone, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

function TeamMemberPage() {
    return (
        <div className=" min-h-screen">
            <div className="container mx-auto p-8">
                <div className="max-w-md mx-auto bg-gray-200 rounded-lg shadow-lg p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-semibold text-gray-800">Ahmed Masroor</h1>
                        <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Edit Member
                        </button>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={`/images/sir.png`} alt='Ahmed Masroor' className="w-32 h-32 rounded-full" />
                        <div className="mt-4 text-center">
                            <p className="text-xl font-semibold text-gray-800">Ahmed Masroor</p>
                            <p className="text-gray-600">CEO</p>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="mt-6 flex justify-center items-center space-x-4">
                            <a href="#" className="text-gray-500 hover:text-blue-500"><FaEnvelope /></a>
                            <a href="#" className="text-gray-500 hover:text-blue-500"><FaPhone /></a>
                            <a href="#" className="text-gray-500 hover:text-blue-500"><FaLinkedin /></a>
                            <a href="#" className="text-gray-500 hover:text-blue-500"><FaTwitter /></a>
                            <a href="#" className="text-gray-500 hover:text-blue-500"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamMemberPage;
