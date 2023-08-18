import React from 'react';

const CardList = () => {
  const cardData = [
    {
      title: 'TOTAL SALES ORDER',
      image: 'https://res.cloudinary.com/dap6ohre8/image/upload/v1691563240/Frame_323_un4udh.png',
      description: 'Rp. 4,152,783,787',
      color: 'border-l-sky-700'
    },
    {
      title: 'TOTAL PURCHASE ORDER',
      image: 'https://res.cloudinary.com/dap6ohre8/image/upload/v1691563240/Frame_323_un4udh.png',
      description: 'Rp.0',
      color: 'border-l-green-500'
    },
    {
      title: 'TOTAL PENJUALAN LIMBAH',
      image: 'https://res.cloudinary.com/dap6ohre8/image/upload/v1691563240/Frame_323_un4udh.png',
      description: 'Rp.0',
      color: 'border-l-teal-400'
    },
    {
      title: 'GROSS PENDAPATAN',
      image: 'https://res.cloudinary.com/dap6ohre8/image/upload/v1691563240/Frame_323_un4udh.png',
      description: 'Rp. 4,152,783,787',
      color: 'border-l-yellow-300'
    },
  ];

  return (
    <div className="basis-[25%] border-l-[1px] border-sky-800 ">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`card-green max-w-xs mx-auto ml-8 rounded overflow-hidden mb-5 border-l-4 ${card.color} drop-shadow-md`}
        >
          <div className="shadow-lg bg-white rounded overflow-hidden flex p-5">
            <div className="px-2 py-2">
              <div className="font-normal text-xs  mb-2 text-green-500">{card.title}</div>
              <p className="text-gray-700 text-xl font-semibold">{card.description}</p>
            </div>
            <div className="image-icon p-3">
              <img className="w-[2.5em] h-[1.5em] mt-3" src={card.image} alt={card.title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
