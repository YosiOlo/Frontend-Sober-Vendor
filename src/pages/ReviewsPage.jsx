import React from 'react';
import TopBar from '../Components/TopBar/TopBar';
import ReviewTable from '../Components/Review/ReviewTable';

function ReviewsPage() {
  return (
    <div>
      <TopBar title="Reviews"/>
      <div className="p-4">
      <ReviewTable/>
      </div>
    </div>
  )
}

export default ReviewsPage