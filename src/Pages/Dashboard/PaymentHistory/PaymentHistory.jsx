import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { MdOutlineDeleteForever } from "react-icons/md";
import usePaymentHistory from "../../../hooks/usePaymentHistory";

const PaymentHistory = () => {
    const [payments, refetch] = usePaymentHistory();
    console.log(payments);

  return (
    <div>
      <SectionTitle
        subHeading={"At a Glance"}
        heading={"Payment History"}
      ></SectionTitle>
       <div className="w-3/4 mx-auto my-10 p-10 bg-[#F3F3F3] rounded-lg">
              <div className="flex justify-between">
                <h1 className="text-3xl font-medium uppercase">
                  Total Payments: {payments.length}
                </h1>
              </div>
              {/* table */}
              <div className="w-full overflow-x-auto">
                <table className="table my-4">
                  {/* head */}
                  <thead>
                    <tr className="bg-[#D1A054] text-white uppercase">
                      <th></th>
                      <th>Email</th>
                      <th>Total Price</th>
                      <th>Transaction Id</th>
                      <th>Payment Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {payments.map((payment, index) => (
                      <tr key={payment._id}>
                        <th>
                          <label>{index + 1}</label>
                        </th>
                        <td>{payment.email}</td>
                        <td>{payment.price}</td>
                        <td>{payment.transactionId}</td>
                        <td>{payment.date}</td>
                        <td>{payment.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
    </div>
  );
};

export default PaymentHistory;
