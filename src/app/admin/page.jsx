'use client';
import withAuth from "../../actions/withAuth";

const AdminOverview = () => {
  return (
    <>
      Body here
    </>
  );
};

AdminOverview.displayName = "Admin";

export default withAuth(AdminOverview);