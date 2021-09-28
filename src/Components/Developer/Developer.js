import React from 'react';
import './Developer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
const Developer = (props) => {
    // destructuring
    const { images, name, role, gender, salary, phone, email, country } = props.developers;
    // react FontAwesomeIcon icon 
    const codeIcon = <FontAwesomeIcon icon={faCode} />
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
    const instagramIcon = <FontAwesomeIcon icon={faInstagram} />
    const githubIcon = <FontAwesomeIcon icon={faGithub} />
    return (
        <div className="col">
            <div className="card h-100">
                <div className="mx-auto p-2">
                    <img className="img-thumbnail card-img" src={images} alt={name} />
                </div>
                <div className="card-body text-center">
                    <h4 className="card-title">{name}</h4>
                    <h6>Role: {role}</h6>
                    <h6>Gender: {gender}</h6>
                    <h5>Salary: ${salary}</h5>
                    <h6>Phone: {phone}</h6>
                    <h6>Email: {email}</h6>
                    <h6>Country: {country}</h6>
                    <div className="social-icon">
                        <a href="https://facebook.com/monirweb.wdd" target="_blank" rel="noopener noreferrer"><span>{facebookIcon}</span></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><span>{instagramIcon}</span></a>
                        <a href="https://github.com/netstermonir/" target="_blank" rel="noopener noreferrer"><span>{githubIcon}</span></a>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <div className="d-flex flex-column flex-md-row justify-content-center">
                        <button onClick={() => props.handleDeveloper(props.developers)} className="btn btn-secondary fw-bold card-btn">{codeIcon} Hire Developer</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Developer;