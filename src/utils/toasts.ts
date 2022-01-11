import toast from "react-hot-toast";

export const success = (message: string) => {
  toast.success(message, {
    style: {
      backgroundColor: "#fff",
      color: "#444",
      fontFamily: "Poppins",
    },
  });
};

export const error = (message: string) => {
  toast.error(message, {
    style: {
      backgroundColor: "#fff",
      color: "#444",
      fontFamily: "Poppins",
    },
  });
};
