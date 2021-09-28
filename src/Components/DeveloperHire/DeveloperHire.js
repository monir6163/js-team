import React from 'react';
import './DeveloperHire.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const DeveloperHire = (props) => {
    // destructuring
    const { developer } = props;
    // react FontAwesomeIcon icon 
    const CartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    // cart calculation
    let total = 0;
    for (const developers of developer) {
        total = total + developers.salary;
    }
    return (
        <div className="cart-dev pt-2 pb-2">
            <div className="text-secondary">
                <h3>Developer Added: <span className="text-success">{props.developer.length}</span></h3>
                <h3>Total Salary: <span className="text-success">${total}</span></h3>
            </div>
            {developer.map((developers) =>
                <div key={developers.id + Math.random() + " "} className="cart d-flex justify-content-center align-items-center border border-1 border-muted py-2 ">
                    <span>
                        <h6>{developers.name} &nbsp;&nbsp; <img style={{ height: '30px', width: '30px', borderRadius: '50px' }} src={developers.images} alt={developers.name} /></h6>
                    </span>
                </div>)
            }
            <button className="btn btn-secondary px-3 px-lg-4 fw-bold mt-4 cart-btn">{CartIcon} Review Hired List</button>
        </div>
    );
};

export default DeveloperHire;