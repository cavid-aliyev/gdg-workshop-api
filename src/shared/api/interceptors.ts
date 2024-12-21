import axios from "axios";

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

apiInstance.interceptors.request.use(
  config => {
    console.log("Request:", config);
    return config;
  },
  error => {
    console.error("Request Error:", error.message);
    return Promise.reject(error);
  }
);

// Response Interceptor for Error Handling
apiInstance.interceptors.response.use(
  response => {
    // Success: Return response data directly
    return response.data;
  },
  error => {
    if (error.response) {
      // Server returned a response with an error status code
      const { status, data } = error.response;

      // Custom error handling by status code
      switch (status) {
        case 400:
          console.error("Bad Request:", data.message || "Invalid request");
          alert("Bad Request: Please check your input.");
          break;

        default:
          console.error(`HTTP Error ${status}:`, data.message || "An unexpected error occurred.");
          alert(`Error ${status}: ${data.message || "An unexpected error occurred."}`);
          break;
      }
    } else if (error.request) {
      // Request was made but no response was received
      console.error("No Response:", error.message || "The server did not respond.");
      alert("Network Error: Please check your connection.");
    } else {
      // Something went wrong in setting up the request
      console.error("Request Setup Error:", error.message);
      alert("Request Error: Please try again.");
    }

    // Always reject the error so it can be caught in calling code
    return Promise.reject(error);
  }
);

export default apiInstance;
