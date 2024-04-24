import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  TextField,
} from "@mui/material";
import { environment } from "../../../environments/environment";
import React, { useEffect, useRef, useState } from "react";
import axiosInstance from "../../../utils/axios.instance";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";

/**
 * Interface for validation function
 */
interface ValidationRule {
  condition: (val: string) => boolean;
  errorMsg: string;
}

function Signup() {
  const navigate = useNavigate(),
    captchaRef = useRef<ReCAPTCHA | null>(null);

  // Variables with state for form
  const [firstname, setFirstname] = useState<string>(""),
    [lastname, setLastname] = useState<string>(""),
    [email, setEmail] = useState<string>(""),
    [password, setPassword] = useState<string>(""),
    [password2, setPassword2] = useState<string>(""),
    [showPassword, setShowPassword] = useState<boolean>(false),
    [showPassword2, setShowPassword2] = useState<boolean>(false),
    [checkbox, setCheckbox] = useState<boolean>(false),
    [birthDate, setBirthDate] = useState<Date>(new Date()),
    [isLoading, setIsLoading] = useState<boolean>(false);

  /*
        Variables to control that the field has been touched.
        Error to set error message.
        Valid to set validation status.
         */
  const [firstnameError, setFirstnameError] = useState<string>(""),
    [firstnameTouched, setFirstnameTouched] = useState<boolean>(false),
    [firstnameValid, setFirstnameValid] = useState<boolean>(false),
    [lastnameError, setLastnameError] = useState<string>(""),
    [lastnameTouched, setLastnameTouched] = useState<boolean>(false),
    [lastnameValid, setLastnameValid] = useState<boolean>(false),
    [emailError, setEmailError] = useState<string>(""),
    [emailTouched, setEmailTouched] = useState<boolean>(false),
    [emailValid, setEmailValid] = useState<boolean>(false),
    [passwordError, setPasswordError] = useState<string>(""),
    [passwordTouched, setPasswordTouched] = useState<boolean>(false),
    [passwordValid, setPasswordValid] = useState<boolean>(false),
    [password2Error, setPassword2Error] = useState<string>(""),
    [password2Touched, setPassword2Touched] = useState<boolean>(false),
    [password2Valid, setPassword2Valid] = useState<boolean>(false),
    [birthDateError, setBirthDateError] = useState<string>(""),
    [birthDateTouched, setBirthDateTouched] = useState<boolean>(false),
    [birthDateValid, setBirthDateValid] = useState<boolean>(false),
    [checkboxError, setCheckboxError] = useState<string>(""),
    [captchaTouched, setCaptchaTouched] = useState<boolean>(false),
    [captchaValid, setCaptchaValid] = useState<boolean>(false);

  const handleSignInWithGoogle = () => {
    // const idToken = googleUser.getAuthResponse().id_token;
    // localStorage.setItem("idToken", idToken);
  };

  useEffect(() => {
    // // global google
    // console.log(google.accounts.id);
    // google.accounts.id.initialize({
    //   client_id: import.meta.env.GOOGLE_CLIENT_ID,
    //   callbak: handleSignInWithGoogle,
    // });
    // google.accounts.id.renderButton(
    //   let signInDivGoogle = document.getElementById("signInDivGoogle")
    //   signInDivGoogle.
    //   // {theme: "outline", size: "large", text: "continue_with", shape: "circle", width: `280`}
    // )
  }, []);

  /**
   * Function take list of validations condition.
   * Validated field.
   * Set error and validate status.
   * @param value field value
   * @param setError for this field
   * @param setValid for this field
   * @param validations list with conditions
   */
  function validateField(
    value: string,
    setError: React.Dispatch<React.SetStateAction<string>>,
    setValid: React.Dispatch<React.SetStateAction<boolean>>,
    validations: ValidationRule[]
  ): void {
    let isValid = true;
    setError("");
    validations.forEach((validation) => {
      if (validation.condition(value)) {
        setError(validation.errorMsg);
        isValid = false;
        return;
      }
    });
    setValid(isValid);
  }

  /**
   Function for Date field and request
   return string YYYY-MM-DD
   */
  function getDate(): string {
    const year = birthDate.getFullYear().toString().padStart(4, "0");
    const month = (birthDate.getMonth() + 1).toString().padStart(2, "0");
    const day = birthDate.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  /**
   * Separate validation of the date field
   */
  function validateBirthdate(): void {
    setBirthDateValid(false);
    const age: number = Math.floor(
      (new Date().getTime() - birthDate.getTime()) /
        (1000 * 60 * 60 * 24 * 365.25)
    );
    if (age < 18) {
      setBirthDateError("Sie müssen mindestens 18 Jahre alt sein.");
    } else {
      setBirthDateError("");
      setBirthDateValid(true);
    }
  }

  /**
   * Function to validate reCAPTCHA
   */
  function validateCaptcha(): void {
    const captcha = captchaRef.current?.getValue();
    !captcha ? setCaptchaValid(false) : setCaptchaValid(true);
  }

  /**
   * Main validate function.
   * It calls validateField for all fields:
   *   (username, firstname, lastname, email, password, password2, birthDate, captcha)
   */
  function validate() {
    // firstname field validation control
    validateField(firstname, setFirstnameError, setFirstnameValid, [
      {
        condition: (val) => val.length <= 0,
        errorMsg: "Give yours first name.",
      },
      {
        condition: (val) => val.length > 50,
        errorMsg:
          "Give your first name, which contains less than 50 characters.",
      },
      {
        condition: (val) => val.includes(" "),
        errorMsg: "Give your first name without spaces.",
      },
    ]);
    // lastname field validation control
    validateField(lastname, setLastnameError, setLastnameValid, [
      {
        condition: (val) => val.length <= 0,
        errorMsg: "Give your last name.",
      },
      {
        condition: (val) => val.length > 50,
        errorMsg:
          "Give your last name, which contains less than 50 characters.",
      },
      {
        condition: (val) => val.includes(" "),
        errorMsg: "Give your last name without spaces.",
      },
    ]);
    // email field validation control
    validateField(email, setEmailError, setEmailValid, [
      {
        condition: (val) =>
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val),
        errorMsg: "Give your email in the correct format.",
      },
      {
        condition: (val) => val.length > 254,
        errorMsg: "Give your email, which contains less than 254 characters.",
      },
      {
        condition: (val) => val.includes(" "),
        errorMsg: "Give your email without spaces.",
      },
      {
        condition: (val) => val.length <= 0,
        errorMsg: "Give your email.",
      },
    ]);
    // password field validation control
    validateField(password, setPasswordError, setPasswordValid, [
      {
        condition: (val) => val.length < 8,
        errorMsg: "Give your password, which contains at least 8 characters.",
      },
      {
        condition: (val) => val.length > 128,
        errorMsg:
          "Give your password, which contains less than 128 characters.",
      },
      {
        condition: (val) => val.includes(" "),
        errorMsg: "Give your password without spaces.",
      },
      {
        condition: (val) => !/[#?!@$%^&*-/(/)_}{|":;'\\.><=\[\]]/.test(val),
        errorMsg:
          "Give your password, which contains at least 1 special character.",
      },
      {
        condition: (val) => !/[0-9]/.test(val),
        errorMsg: "Give your password, which contains at least 1 number.",
      },
      {
        condition: (val) => !/[a-zA-Z]/.test(val),
        errorMsg: "Give your password, which contains at least 1 letter.",
      },
      {
        condition: (val) => val.length <= 0,
        errorMsg: "Give your password.",
      },
    ]);
    // password2 field validation control
    validateField(password2, setPassword2Error, setPassword2Valid, [
      {
        condition: (val) => val !== password,
        errorMsg: "Give the same password.",
      },
      {
        condition: (_) => password === "",
        errorMsg: "Give your password.",
      },
    ]);
    // Birthdate field validate control
    validateBirthdate();
    // captcha validate control
    validateCaptcha();
  }

  /**
   * Set fields boolean touched on true
   */
  function setFieldsTouched(): void {
    const fields = [
      { valid: firstnameValid, setTouched: setFirstnameTouched },
      { valid: lastnameValid, setTouched: setLastnameTouched },
      { valid: emailValid, setTouched: setEmailTouched },
      { valid: passwordValid, setTouched: setPasswordTouched },
      { valid: password2Valid, setTouched: setPassword2Touched },
      { valid: birthDateValid, setTouched: setBirthDateTouched },
      {
        valid: checkbox,
        setCheckboxError: () =>
          setCheckboxError(
            "It is necessary to accept the terms and conditions."
          ),
      },
      { valid: captchaValid, setTouched: setCaptchaTouched },
    ];
    fields.forEach((field) => {
      if (field.setTouched) {
        field.setTouched(true);
      } else if (field.setCheckboxError) {
        field.setCheckboxError();
      }
    });
  }

  /**
   * Separate function to control if all fields valid
   */
  function allValid(): boolean {
    const fields = [
      firstnameValid,
      lastnameValid,
      emailValid,
      // passwordValid,
      password2Valid,
      // birthDateValid,
      checkbox,
      // captchaValid,
    ];
    console.log(fields[3])
    return fields.every((value) => value);
  }

  /**
   * Reactive validate of fields.
   */
  useEffect((): void => {
    validate();
  }, [firstname, lastname, email, password, password2, checkbox, birthDate]);

  const handleSubmit = async () => {
    // Makes it so that errors are displayed for invalid and don't do touched fields.
    setFieldsTouched();

    // Make own validate
    validate();

    // If all fields valid are.
    if (allValid()) {
      setIsLoading(true);
      // JSON for request.
      const data = {
        first_name: firstname,
        last_name: lastname,
        email: email,
        password: password,
        password2: password2,
        date_of_birth: getDate(),
        accepted_terms_and_conditions: checkbox,
      };
      const res: void = await axiosInstance
        .post(environment.api.register, data)
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
            toast.success(res.data.message);
            navigate("/");
          }
        })
        .catch((err) => {
          console.error(err);
          if (err.response) {
            const errorObject = err.response.data;
            Object.entries(errorObject).forEach(
              ([field, message]: [string, unknown]) => {
                if (
                  Array.isArray(message) &&
                  message.length > 0 &&
                  typeof message[0] === "string"
                ) {
                  if (field === "email") {
                    setEmailValid(false);
                    setEmailError(message[0]);
                  }
                  toast.error(message[0]);
                }
              }
            );
          } else if (err.request) {
            // Handle network errors or request timeout
            toast.error("Network error");
          } else {
            // Handle other unexpected errors
            toast.error("Some error");
          }
        });
    }
  };

  return (
    <Grid>
      <FormGroup>
        <FormControl>
          <TextField
            label={"Email"}
            placeholder="Enter Email"
            fullWidth
            required
            name={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 1 }}
          />
          <TextField
            label={"Name"}
            placeholder="Enter Name"
            fullWidth
            required
            name={"first_name"}
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            sx={{ mb: 1 }}
          />
          <TextField
            label={"Surname"}
            placeholder="Enter Surname"
            fullWidth
            required
            name={"last_name"}
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            sx={{ mb: 1 }}
          />
          <TextField
            label={"Password"}
            placeholder="Enter Password"
            fullWidth
            required
            type={"password"}
            name={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 1 }}
          />
          <TextField
            label={"Repeat Password"}
            placeholder="Repeat Password"
            fullWidth
            required
            type={"password"}
            name={"password2"}
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            sx={{ mb: 1 }}
          />
          <FormControl required error={checkboxError}>
            <FormControlLabel
              sx={{ color: checkboxError ? "red" : "black" }}
              control={
                <Checkbox
                  checked={checkbox}
                  onChange={() => setCheckbox(!checkbox)}
                />
              }
              label="I accept the terms and conditions."
            />
            {!checkbox && !!checkboxError && (
              <FormHelperText>{checkboxError}</FormHelperText>
            )}
          </FormControl>
          <ReCAPTCHA
            className={"reCaptcha"}
            ref={captchaRef}
            sitekey="some_key"
            onChange={validateCaptcha}
          />

          {!captchaValid && captchaTouched && (
            <FormHelperText>Are you Robot?!</FormHelperText>
          )}
        </FormControl>
        <Button
          type={"submit"}
          color="primary"
          variant="contained"
          fullWidth
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </FormGroup>
    </Grid>
  );
}

export default Signup;
