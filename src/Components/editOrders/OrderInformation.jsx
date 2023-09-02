import React, { useState } from "react";
import { GrCompliance } from "react-icons/gr";
import { BsCheckLg } from "react-icons/bs";
import UpdateShipping from "./UpdateShippingButton";
import { FaShippingFast } from "react-icons/fa";

function OrderInformation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="card bg-white rounded-lg  text-[12px] ">
        <p className="font-semibold p-4">Order information #10000312</p>
        <div className="status flex p-4 gap-2 border-b-[1px] border-slate-200">
          <GrCompliance />
          <p className="font-bold text-[12px]">Completed</p>
        </div>
        <div className="orders flex gap-3 p-4">
          <img
            className="h-10 w-10 border"
            src="https://res.cloudinary.com/dap6ohre8/image/upload/v1692042539/roady/download_uqwfbi.png"
            alt=""
          />
          <div className="detail">
            <p>SEDAAP MINYAK GORENG POUCH</p>
            <p className="text-[10px]">(Liter:2 lt)</p>
            <p className="text-slate-300">150 completed</p>
            <p>
              Shipping <span className="text-slate-400 font-bold">Default</span>{" "}
            </p>
          </div>
          <p>
            (SKU: <span className="font-semibold">1686191911-Liter</span>){" "}
          </p>
          <p>Rp58.999 x 150</p>
          <p>Rp8.849.850</p>
        </div>
        <div className="rincian-harga flex justify-end gap-10 p-4">
          <div className="kolomKiri">
            <p>Sub amount </p>
            <p>Discount</p>
            <div className="shippingFee">
              <p>Shipping fee</p>
              <p className="text-[10px]">Default</p>
              <p className="text-[10px]">0.01 grams</p>
            </div>
            <div className="totalPayment">
              <p>Total Amount</p>
              <p className="text-[10px]">Bank Transfer</p>
            </div>
          </div>
          <div className="kolomKanan">
            <p>Rp8.849.850</p>
            <p>Rp0</p>
            <p className="mt-5">Rp18.000</p>
            <p className="mt-5">Rp8.867.850</p>
          </div>
        </div>
        <div className="paidAmount flex justify-end gap-10 p-4 border-t-[1px] border-slate-200">
          <p>Paid Amount</p>
          <p>Rp8.868.138</p>
        </div>
        <div className="invoice flex justify-end px-4">
          <button className="bg-[#0DCAF0] w-[150px] h-[30px] rounded-lg text-white">
            Download Invoice
          </button>
        </div>
        <div className="notes">
          <p>Note</p>
        </div>

        <div className="orderStatus border-t-[1px] border-slate-200 p-4 flex gap-3">
          <BsCheckLg className="text-white text-3xl bg-green-400 rounded-3xl p-1 " />
          <p className="mt-1">ORDER WAS CONFIRMED</p>
        </div>
        <div className="deliveryStatus border-t-[1px] border-slate-200 p-4 flex gap-3">
          <BsCheckLg className="text-white text-3xl bg-green-400 rounded-3xl p-1 " />
          <p className="mt-1">DELIVERY</p>
          <div className="id flex gap-4">
            <h1>#10000312</h1>
            <p className="bg-yellow-400 text-yellow-800 p-1 rounded-md ">
              delivered
            </p>
          </div>
        </div>
        <div className="desc p-4">
          <div className="shipping flex gap-9">
            <p>Shipping method: Default</p>
            <p>Weight (g): 0 g</p>
          </div>
          <p>Last Update: 2023-08-07 11:44:29</p>
        </div>
        <div className="bg-[#e6e5e5] p-2">
          <button
            className="bg-[#0DCAF0] ml-2 text-white px-4 py-2 rounded flex gap-3"
            onClick={openModal}
          >
            <FaShippingFast className="text-white mt-1" />
            Update Shipping Status
          </button>

          <UpdateShipping isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
      <div className="history mt-5 bg-white">
        <div className="header p-4 border-b-[1px] border-slate-200 ">
          <h1>History</h1>
        </div>
        <div className="steps">
          <ul className="steps steps-vertical">
            <li className="step step-accent">Order was verified by System</li>
            <li className="step step-accent">Order confirmed</li>
            <li className="step text-sla">Order confirmed by</li>
            <li className="step">New order #10000312 from adam</li>
            <li className="step">
              The email confirmation was sent to customer
            </li>
          </ul>
          <div className="date flex flex-col gap-16">
            <ul>
              <li>2023-08-16 16:25:09</li>
              <li>2023-08-07 11:45:06</li>
              <li>2023-08-07 11:45:06</li>
              <li>2023-08-07 11:45:06</li>
              <li>2023-08-07 11:45:06</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderInformation;
