import { useState } from "react";

const User = ({name}) => 
{
    const [count, setCount] = useState(0);
    return (
        <div className="user-details">
            <h2>{name}</h2>
            <h3> CountFunc: {count}
                <button 
                    className="user-button" 
                    onClick={ () => setCount(count+1)}
                >Increment</button>
            </h3>

            <h2>Location: London</h2>
            <h2>Contact: 07503xxxxx</h2>
            <h2>Email: moinuddinxxx@gmail.com</h2>
        </div>
    )
}
export default User;