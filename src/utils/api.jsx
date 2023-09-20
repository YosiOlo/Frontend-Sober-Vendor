
function formatDate(datestring) {
  return new Date(datestring).toLocaleDateString("en-ID", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
}
export { formatDate };
