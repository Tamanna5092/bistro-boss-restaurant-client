import React from 'react';
import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
    const {user} = useAuth()

    return (
        <div className='p-2 md:p-6'>
            <h1 className='text-3xl '><span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }!</h1>
            <div>

            </div>
        </div>
    );
};

export default UserHome;