import React from 'react';

const Dashboard = ({ logOut, profile }) => {
    return (
        <div>
            {profile && (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                </div>
            )}
            <button onClick={logOut}>Log out</button>
        </div>
    );
}

export default Dashboard;
