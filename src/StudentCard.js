import React from 'react';

function StudentCard({ student, onBlock, isExpanded, toggleDetails }) {
    return (
        <div className={`student-card ${isExpanded ? 'expanded' : ''}`}>
            <div className="student-icon">
                <i className="fas fa-user-graduate"></i>
            </div>
            <h3>{student.name}</h3>
            <p>{student.specialization || 'Specialization not specified'}</p>
            <p>Intern Role: {student.role || 'Role not specified'}</p>
            <p>
                <i className="fas fa-envelope"></i> {student.email || 'Email not specified'}
            </p>
            {isExpanded && (
                <div className="student-details">
                    <p>More details about {student.name}:</p>
                    <p>Internship Duration: {student.internshipDuration || 'Duration not specified'}</p>
                    <p>Joined on: {student.joinedOn || 'Join date not specified'}</p>
                    <p>Skills: {student.skills ? student.skills.join(', ') : 'No skills specified'}</p>
                </div>
            )}
            <div className="card-buttons">
                <button className="block-button" onClick={() => onBlock(student.id)}>
                    Block
                </button>
                <button className="details-button" onClick={() => toggleDetails(student.id)}>
                    {isExpanded ? 'Hide Details' : 'Show Details'}
                </button>
            </div>
        </div>
    );
}

export default StudentCard;
