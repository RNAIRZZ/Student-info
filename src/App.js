import React, { useState } from 'react';
import './App.css';
import StudentCard from './StudentCard';
import SearchBar from './SearchBar';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

const students = [
    {
        id: 1,
        name: 'Ravi Kumar',
        role: 'Software Intern',
        email: 'ravi.kumar@example.com',
        category: 'Active Intern',
        experience: '6 months',
        specialization: 'Full Stack Development',
        internshipDuration: 'Jan 2024 - June 2024',
        joinedOn: '1st July 2023',
        skills: ['JavaScript', 'React', 'Node.js']
    },
    {
        id: 2,
        name: 'Sneha Patel',
        role: 'Data Analyst Intern',
        email: 'sneha.patel@example.com',
        category: 'Inactive Intern',
        experience: '1 year',
        specialization: 'Data Visualization',
        internshipDuration: 'Feb 2023 - Dec 2023',
        joinedOn: '1st Feb 2023',
        skills: ['Python', 'Tableau', 'SQL']
    },
    {
        id: 3,
        name: 'Arjun Singh',
        role: 'Web Developer Intern',
        email: 'arjun.singh@example.com',
        category: 'Active Intern',
        experience: '4 months',
        specialization: 'Frontend Development',
        internshipDuration: 'March 2024 - July 2024',
        joinedOn: '1st March 2024',
        skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
        id: 4,
        name: 'Priya Sharma',
        role: 'Marketing Intern',
        email: 'priya.sharma@example.com',
        category: 'Inactive Intern',
        experience: '1 year',
        specialization: 'Digital Marketing',
        internshipDuration: 'Jan 2023 - Dec 2023',
        joinedOn: '1st Jan 2023',
        skills: ['SEO', 'Content Creation', 'Social Media']
    },
    {
        id: 5,
        name: 'Rahul Verma',
        role: 'UI/UX Intern',
        email: 'rahul.verma@example.com',
        category: 'Active Intern',
        experience: '5 months',
        specialization: 'User Interface Design',
        internshipDuration: 'April 2024 - September 2024',
        joinedOn: '1st April 2024',
        skills: ['Sketch', 'Figma', 'User Testing']
    },
    {
        id: 6,
        name: 'Neha Joshi',
        role: 'Graphic Design Intern',
        email: 'neha.joshi@example.com',
        category: 'Inactive Intern',
        experience: '1 year',
        specialization: 'Branding and Identity',
        internshipDuration: 'March 2023 - March 2024',
        joinedOn: '1st March 2023',
        skills: ['Adobe Illustrator', 'Photoshop', 'Brand Strategy']
    },
];


function App() {
    const [user, setUser] = useState(null);
    const [isSignup, setIsSignup] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [expandedStudentId, setExpandedStudentId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

    const handleLogin = (userData) => {
        setUser(userData);
        setIsSignup(false);
    };

    const handleSignup = (userData) => {
        console.log('User signed up:', userData);
        setUser(userData);
        setIsSignup(false);
    };

    const handleLogout = () => {
        setUser(null);
        setIsDropdownOpen(false);
        alert('User has been logged out');
    };

    const toggleDetails = (id) => {
        setExpandedStudentId(expandedStudentId === id ? null : id);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const filteredStudents = students.filter(student => {
        const matchesCategory = selectedCategory === 'All' || student.category === selectedCategory;
        const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="App">
            {user ? (
                <>
                    <header className="header">
                        <h1>Student Information</h1>
                        <div className="header-right">
                            <div className="search-bar">
                                <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
                                    <option value="All">All</option>
                                    <option value="Active Intern">Active Intern</option>
                                    <option value="Inactive Intern">Inactive Intern</option>
                                </select>
                                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                            </div>
                           
                            <div className="profile-section" onClick={toggleDropdown}>
                                <span className="username">{user.username || user.email}</span>
                                <i className={`arrow ${isDropdownOpen ? 'up' : 'down'}`} />
                                {isDropdownOpen && (
                                    <div className="dropdown-menu">
                                        <button onClick={() => alert('User Profile')}>Profile</button>
                                        <button onClick={handleLogout}>Logout</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </header>

                    <div className="student-list">
                        {filteredStudents.map((student) => (
                            <StudentCard
                                key={student.id}
                                student={student}
                                isExpanded={expandedStudentId === student.id}
                                toggleDetails={toggleDetails}
                            />
                        ))}
                    </div>
                </>
            ) : isSignup ? (
                <SignupPage onSignup={handleSignup} />
            ) : (
                <LoginPage onLogin={handleLogin} onSwitchToSignup={() => setIsSignup(true)} />
            )}
        </div>
    );
}

export default App;
