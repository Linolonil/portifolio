import React, { useEffect, useState } from "react";
import "./loading.css";

const Loading = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return isLoading ? (
    <div className="loading-overlay">
      <div class="loader">
        Loading
        <span></span>
      </div>
    </div>
  ) : null;
};

export default Loading;
