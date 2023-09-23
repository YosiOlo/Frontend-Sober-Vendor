import React,{useState,useEffect} from 'react'
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from 'axios';

function TaxInfo() {
    const [paymentMethod, setPaymentMethod] = useState("Bank Transfer");
    const [bankName, setBankName] = useState("");
    const [bankCode, setBankCode] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [accountHolder, setAccountHolder] = useState("");
    const [upiId, setUpiId] = useState("");
    const [paypalId, setPaypalId] = useState("");
    const [descriptionPayout, setDescriptionPayout] = useState("");

    useEffect(() => {
        // Define your API endpoint and token
        const apiUrl = 'https://kuro.asrofur.me/sober/api/users/vendor';
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYiLCJlbWFpbCI6InNvYmVyb2ZmaWNpYWxAZ21haWwuY29tIiwiaWF0IjoxNjk1NDM3MTkxLCJleHAiOjE2OTU1MjM1OTF9.mWc6KJMp23BuLPjXVevZTrVE1TcumGw245I9a7pIYko'; // Replace with your actual token
    
        // Define the headers with authorization
        const headers = {
          Authorization: `Bearer ${token}`,
        };
    
        axios
          .get(apiUrl, { headers })
          .then((response) => {
            // Handle the response data here
            const vendorData = response.data.data;
            console.log(response.data.data);
    
            // Assuming that the response data has the necessary fields
            setBankName(vendorData?.store_info?.name || "");
            setBankCode(vendorData.store_info?.company || "");
            setAccountNumber(vendorData.store_info?.phone || "");
            setAccountHolder(vendorData?.store_info?.email || "");
            setUpiId(vendorData.linkToko || "");
            setDescriptionPayout(vendorData.store_info?.address || "");
            setPaypalId(vendorData?.store_info?.zip_code || "");
            setPaymentMethod(vendorData?.vendor_info?.payout_payment_method || "");
          })
          .catch((error) => {
            // Handle errors here
            console.error('Error fetching vendor data:', error);
          });
      }, []);

  return (
    <div>
      <div className="mt-4">
        <div className="space-y-2">
          <div>
            <label className="block font-medium">Payment Method</label>
            <select
              className="border rounded px-3 py-2 w-full bg-white"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="bank_transfer">Bank Transfer</option>
              <option value="paypal">Paypal</option>
            </select>
          </div>

          {paymentMethod === "bank_transfer" && (
            <>
              <div>
                <label className="block font-medium">Bank Name</label>
                <input
                  className="border rounded px-3 py-2 w-full bg-white"
                  type="text"
                  value={bankName}
                  placeholder="Bank Name"
                  onChange={(e) => setBankName(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-medium">Bank Code/IFSC</label>
                <input
                  className="border rounded px-3 py-2 w-full bg-white"
                  type="text"
                  value={bankCode}
                  placeholder="Bank Code/IFSC"
                  onChange={(e) => setBankCode(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-medium">Account Number</label>
                <input
                  className="border rounded px-3 py-2 w-full bg-white"
                  type="text"
                  value={accountNumber}
                  placeholder="Account Number"
                  onChange={(e) => setAccountNumber(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-medium">Account Holder Name</label>
                <input
                  className="border rounded px-3 py-2 w-full bg-white"
                  type="text"
                  value={accountHolder}
                  placeholder="Account Holder Name"
                  onChange={(e) => setAccountHolder(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-medium">UPI ID</label>
                <input
                  className="border rounded px-3 py-2 w-full bg-white"
                  type="text"
                  value={upiId}
                  placeholder="UPI ID"
                  onChange={(e) => setUpiId(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-medium">Description</label>
                <input
                  className="border rounded h-[100px] px-3 py-2 w-full bg-white"
                  type="text"
                  value={descriptionPayout}
                  placeholder="Description"
                  onChange={(e) => setDescriptionPayout(e.target.value)}
                />
              </div>
          <div>
            <label className="block font-medium">Content</label>
            <CKEditor
              className="h-[100px]"
              editor={ClassicEditor}
              onInit={(editor) => {}}
            />
          </div>
            </>
          )}

          {paymentMethod === "paypal" && (
            <>
              <div>
                <label className="block font-medium">PayPal Email ID:</label>
                <input
                  className="border rounded px-3 py-2 w-full bg-white"
                  type="text"
                  value={paypalId}
                  onChange={(e) => setPaypalId(e.target.value)}
                />
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  )
}

export default TaxInfo