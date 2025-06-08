import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import useUser from '../../../hooks/useUser';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';

const AllUsers = () => {
    const [users] = useUser()

    return (
        <div>
      <SectionTitle
        subHeading={"How Many??"}
        heading={"Mange All Users"}
      ></SectionTitle>
      <div className="w-3/4 mx-auto my-10 p-10 bg-[#F3F3F3] rounded-lg">
        <div className="flex justify-between">
          <h1 className="text-3xl font-medium uppercase">
            Total Users: {users.length}
          </h1>
        </div>
        {/* table */}
        <div className="w-full overflow-x-auto">
          <table className="table my-4">
            {/* head */}
            <thead>
              <tr className="bg-[#D1A054] text-white uppercase">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className='btn bg-[#D1A054] text-white'>
                        <FaUsers className="w-5 h-5"></FaUsers>
                    </button>
                  </td>
                  <th>
                    <button
                    //   onClick={() => handleDelteItem(user._id)}
                      className="btn bg-[#B91C1C] text-white"
                    >
                      <MdOutlineDeleteForever className="w-5 h-5"></MdOutlineDeleteForever>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default AllUsers;