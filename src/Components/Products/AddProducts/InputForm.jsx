import React, { useState } from 'react';

const InputForm = () => {
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [productCategory, setProductCategory] = useState('');
  const [productShelf, setProductShelf] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Lakukan logikanya di sini, misalnya mengirim data ke server

    // Setelah berhasil, kosongkan form
    setProductName('');
    setProductImage(null);
    setProductCategory('');
    setProductShelf('');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Tambah Produk</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="productName" className="block font-semibold mb-2">
            Nama Produk
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="productImage" className="block font-semibold mb-2">
            Upload Gambar
          </label>
          <input
            type="file"
            id="productImage"
            name="productImage"
            accept="image/*"
            onChange={(e) => setProductImage(e.target.files[0])}
            required
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="productCategory" className="block font-semibold mb-2">
            Kategori
          </label>
          <select
            id="productCategory"
            name="productCategory"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
          >
            <option value="">Pilih Kategori</option>
            <option value="rumah_tangga">Rumah Tangga</option>
            <option value="audio_kamera">Audio & Kamera</option>
            <option value="elektronik_lainnya">Elektronik Lainnya</option>
            <option value="fashion_muslim">Fashion Muslim</option>
            <option value="fashion_wanita">Fashion Wanita</option>
            <option value="ibu_bayi">Ibu & Bayi</option>
            <option value="kecantikan">Kecantikan</option>
            <option value="kesehatan">Kesehatan</option>
            <option value="komputer_laptop">Komputer & Laptop</option>
            <option value="makan_minum">Makanan & Minuman</option>
            <option value="perawatan_tubuh">Perawatan Tubuh</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="productShelf" className="block font-semibold mb-2">
            Etalase
          </label>
          <input
            type="text"
            id="productShelf"
            name="productShelf"
            value={productShelf}
            onChange={(e) => setProductShelf(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Tambah Produk
        </button>
      </form>
    </div>
  );
};

export default InputForm;
