import React, { useState } from "react";
import { RiMessageFill } from "react-icons/ri";
import { BsPencil } from "react-icons/bs";
import { MdCall } from "react-icons/md";

function SideMenu() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    name: "Adam",
    phoneNumber: "08563214489",
    email: "feneco2602@kkoup.com",
    address: "jalan ahmad yani, wonocolo",
    city: "surabaya",
    state: "jawa timur",
    zipCode: "60238",
  });

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({
      ...shippingInfo,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Lakukan logika untuk menyimpan informasi yang diedit ke server atau state global
    // Kemudian, tutup modal
    closeEditModal();
  };

  return (
    <div className="bg-white rounded-md p-4 h-[350px]">
      {/* Bagian informasi pelanggan */}
      <div className="customer border-b-[1px] border-slate-200 mb-7">
        <div className="header flex justify-between mb-3">
          <h1>Customer</h1>
          <img
            className="h-10 w-10"
            src="https://res.cloudinary.com/dap6ohre8/image/upload/v1692042539/roady/download_uqwfbi.png"
            alt=""
          />
        </div>
        <p className="font-bold">Adam</p>
        <div className="detailOrders flex gap-3">
          <RiMessageFill className="mt-1" />
          <p>8 Orders</p>
        </div>
        <p>feneco2602@kkoup.com</p>
        <p className="mb-8">Have an account already</p>
      </div>

      {/* Bagian alamat pengiriman */}
      <div className="shippingAddress">
        <div className="header flex justify-between">
          <p className="font-bold"> Shipping Address</p>
          <BsPencil onClick={openEditModal} className="cursor-pointer" />
        </div>
        <p>{shippingInfo.name}</p>
        <div className="call flex gap-3 hover:text-yellow-300">
          <MdCall className="mt-1 hover:text-yellow-300" />
          <p className="hover:text-yellow-300 cursor-pointer">
            {shippingInfo.phoneNumber}
          </p>
        </div>
        <p>
          {shippingInfo.address}
          <br />
          {shippingInfo.city}
          <br />
          {shippingInfo.state}
          <br />
          {shippingInfo.zipCode}
        </p>
        <a className="hover:text-yellow-300" href="">
          See on Maps
        </a>
      </div>

      {/* Modal untuk mengedit informasi pengiriman */}
      {isEditModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-[#e9e9e9] p-4 rounded-md w-[60%]">
            <div className="header ">
            <h2 className="text-lg font-semibold mb-4">Update Address</h2>
            </div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={shippingInfo.name}
              onChange={handleInputChange}
              className="w-full mb-2 bg-slate-300 p-2 rounded-md border-2"
            />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={shippingInfo.phoneNumber}
              onChange={handleInputChange}
              className="w-full mb-2  bg-slate-300 p-2 rounded-md"
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={shippingInfo.email}
              onChange={handleInputChange}
              className="w-full mb-2 bg-slate-300 p-2 rounded-md"
            />
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              value={shippingInfo.address}
              onChange={handleInputChange}
              className="w-full mb-2 bg-slate-300 p-2 rounded-md"
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              value={shippingInfo.city}
              onChange={handleInputChange}
              className="w-full mb-2 bg-slate-300 p-2 rounded-md"
            />
            <label htmlFor="state">State</label>
            <input
              type="text"
              name="state"
              value={shippingInfo.state}
              onChange={handleInputChange}
              className="w-full mb-2 bg-slate-300 p-2 rounded-md"
            />
            <label htmlFor="zipCode">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={shippingInfo.zipCode}
              onChange={handleInputChange}
              className="w-full mb-2 bg-slate-300 p-2 rounded-md"
            />
            <button
              onClick={handleSubmit}
              className="bg-[#0DCAF0] hover:bg-[#29D4F7] text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
            <button
              onClick={closeEditModal}
              className="bg-[#FFC107] hover:bg-[#efdba0] text-white px-4 py-2 rounded-lg ml-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideMenu;
