import { useState } from "react";

export default (useAPI = ApiFunction => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [errorDetails, setErrorDetails] = useState();
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await ApiFunction(...args);
    setLoading(false);

    setError(!response.ok);
    setErrorDetails(response.problem);
    setData(response.data);
    return response;
  };
  return { request, data, error, errorDetails, loading };
});
