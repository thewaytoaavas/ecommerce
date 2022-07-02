import { loginAdminUser } from "../../helpers/axiosHelper";
import { setUser } from "./loginRegisterSlice";
import { toast } from "react-toastify";

export const loginAction = (obj) => async (dispatch) => {
  //show toastify spinner

  //call helper

  const resultPromise = loginAdminUser(obj);

  toast.promise(resultPromise, {
    pending: "PLEASE WAIT ...",
  });

  const { status, message, result } = await resultPromise;
  toast[status](message);

  //show toastify message, success or error

  //if response is success then call setUser and pass the user data

  status === "success" && dispatch(setUser(result));
};
