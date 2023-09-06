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
