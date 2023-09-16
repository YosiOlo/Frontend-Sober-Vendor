const baseUrl = "https://kuro.asrofur.me/sober/api";
const bearerToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYiLCJlbWFpbCI6InNvYmVyb2ZmaWNpYWxAZ21haWwuY29tIiwiaWF0IjoxNjkzODk3ODg1LCJleHAiOjE2OTM5ODQyODV9.cL1Cyf6Jjr28tlb1jBLlQXNlgI1O1wglfrSlg10Ajp4";

const getOrders1 = async () => {

    const response = await axios.get(
      `${baseUrl}/transaction/vendor?limit=30/`,
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );
    const responseJson = await response.json();
    if (responseJson.data == null) {
      return { error: true, data: responseJson.data };
    } else {
      return { error: false, data: responseJson.data };
    }
};

function formatDate(datestring) {
  return new Date(datestring).toLocaleDateString("en-ID", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
}
export { formatDate };

const fetchRevenueData = async () => {
  const apiUrl = "https://kuro.asrofur.me/sober/api/transaction/vendor/revenue";
  const bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYiLCJlbWFpbCI6InNvYmVyb2ZmaWNpYWxAZ21haWwuY29tIiwiaWF0IjoxNjk0NzYzMjQwLCJleHAiOjE2OTQ4NDk2NDB9.685_1ZkUcFetsS1WHcLhsGt9DFIlntloGDURLoXDjdk";

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// To use the fetchRevenueData function, you can call it wherever needed in your code.
// For example:
const fetchData = async () => {
  try {
    const revenueData = await fetchRevenueData();
    console.log("Revenue Data:", revenueData);
    // You can set the data or process it further here.
  } catch (error) {
    console.error("Error in fetchData:", error);
  }
};

// Call fetchData to fetch and handle the data
fetchData();
