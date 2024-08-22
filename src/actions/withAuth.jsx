'use client';
import { useEffect, useState, useCallback } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/config/firebase";

const withAuth = (WrappedComponent) => {
  const HOC = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [lastActivity, setLastActivity] = useState(
      localStorage.getItem("lastActivity")
        ? parseInt(localStorage.getItem("lastActivity"))
        : Date.now()
    );

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push("/admin/auth/login");
        } else {
          setLoading(false);
        }
      });

      const handleActivity = () => {
        const now = Date.now();
        setLastActivity(now);
        localStorage.setItem("lastActivity", now);
      };

      window.addEventListener("mousemove", handleActivity);
      window.addEventListener("keydown", handleActivity);

      const interval = setInterval(() => {
        const now = Date.now();
        if (now - lastActivity > 600 * 1000) {
          // 10 seconds
          // setShowModal(true);
          router.push("/admin/auth/modal");
        }
      }, 1000);

      return () => {
        unsubscribe();
        clearInterval(interval);
        window.removeEventListener("mousemove", handleActivity);
        window.removeEventListener("keydown", handleActivity);
      };
    }, [router, lastActivity]);

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <>
        {/* {showModal && (
          <Modal
            show={true}
            onClose={() => {
              signOut(auth);
              router.push("/auth/login");
            }}
            onConfirm={handleModalConfirm}
            message="Are you still active? Enter your PIN to continue."
            inputLabel="PIN"
          />
        )} */}
        <WrappedComponent {...props} />
      </>
    );
  };

  HOC.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return HOC;
};

export default withAuth;
