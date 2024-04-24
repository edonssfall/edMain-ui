import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { IProfileState } from "../../../interfaces/profile.interface";
import { IModalState } from "../../../interfaces/modal.interface";
import { environment } from "../../../environments/environment";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useProfileStore } from "../../../states/profile.store";
import { useModalStore } from "../../../states/modal.store";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";

function Login(): JSX.Element {
  const modalId: number = environment.modals.auth;
  const modalStore: IModalState = useModalStore();
  const profileStore: IProfileState = useProfileStore();

  const [errorForm, setErrorForm] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [save, setSave] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  useEffect((): void => {}, [profileStore.isLogged]);

  function emailValidate(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function passwordValidate(): boolean {
    return password.length > 8;
  }

  const handleSubmit = async (): Promise<void> => {
    if (!profileStore.isLogged) {
      if (!emailValidate() || !passwordValidate()) {
        setErrorForm(true);
      } else {
        await profileStore
          .logIn(email, password)
          .then((isLogged: boolean): void => {
            setErrorForm(isLogged);
            if (isLogged) {
              toast.success("Successfully login!!");
              modalStore.close(modalId);
            }
          });
      }
    } else {
      modalStore.close(modalId);
    }
  };

  return (
    <Grid>
      <FormGroup>
        {errorForm ? (
          <FormControl>
            <TextField
              error
              label="Email"
              placeholder="Enter Email"
              fullWidth
              required
              sx={{ mb: 1 }}
              onChange={(
                event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ): void => {
                setEmail(event.target.value);
              }}
            />
          </FormControl>
        ) : (
          <FormControl>
            <TextField
              label="Email"
              placeholder="Enter Email"
              fullWidth
              required
              sx={{ mb: 1 }}
              onChange={(
                event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ): void => {
                setEmail(event.target.value);
              }}
            />
          </FormControl>
        )}
        {errorForm ? (
          <FormControl>
            <TextField
              error
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
              onChange={(
                event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ): void => {
                setPassword(event.target.value);
              }}
            />
            <FormHelperText id="component-error-text">
              Enter valid Password or Email
            </FormHelperText>
          </FormControl>
        ) : (
          <FormControl>
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
              onChange={(
                event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ): void => {
                setPassword(event.target.value);
              }}
            />
          </FormControl>
        )}
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          value={save}
          onChange={(_: React.SyntheticEvent): void => {
            setSave(!save);
          }}
          label="Remember me"
        />
        <Button
          type={"submit"}
          color="primary"
          variant="contained"
          fullWidth
          sx={{ mb: 1 }}
          onClick={handleSubmit}
        >
          Log in
        </Button>
      </FormGroup>
      <Typography>
        <Link href="#">Forgot password ?</Link>
      </Typography>
    </Grid>
  );
}

export default Login;
