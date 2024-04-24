import { environment } from "../../environments/environment";
import axiosInstance from "../../utils/axios.instance";
import React, { useState } from "react";
import { toast } from "react-toastify";

function VerifyEmail(): JSX.Element {
  const [otp, setOtp] = useState<string>("");

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (otp) {
      const response = await axiosInstance.post(environment.api.otp, {
        otp: otp,
      });
      if (response.status === 200) {
        toast.success(response.data.message);
      }
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor={""}>Enter your Verification Code</label>
            <input
              type={"text"}
              className={"email-form"}
              name={"otp"}
              value={otp}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setOtp(event.target.value)
              }
            />
          </div>
          <input type={"submit"} value={"Send"} />
        </form>
      </div>
    </>
  );
}

export default VerifyEmail;
