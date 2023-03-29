import * as React from "react";
import { styled } from "@mui/material/styles";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Paper from "@mui/material/Paper";
import { Button, Grid, TextField, Typography } from "@mui/material";
import LayoutTemplate from "@/templates/layout/LayoutTemplate";
import { useRouter } from "next/router";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

const Midstyle = styled(Paper)(() => ({
  display: "flex",
  justifyContent: "center",
  height: "100vh",
  alignItems: "center",
}));

export default function Login() {
  const router = useRouter();
  const [loggedin, setloggedIn] = React.useState(false);

  const [logout, setLogout] = React.useState("Login");

  const [value, setValue] = React.useState("Login");

  const logoutHandler = () => {
    if (value === "Logout") {
      router.push("/");
    }
  };

  return (
    <LayoutTemplate loggedin={loggedin} logout={logout}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(6, "Password must be at least 6 charaters")
            .required("Password is required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setloggedIn(true);
          setLogout("Logout");
          console.log(values);
          setValue("Logout");
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Midstyle>
              <Grid container>
                <Grid item xs={12} md={12}>
                  <Item>
                    <Field
                      as={TextField}
                      label="Email"
                      name="email"
                      type="email"
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  </Item>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Item>
                    <Field
                      as={TextField}
                      label="Password"
                      name="password"
                      type="password"
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                    />
                  </Item>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Item>
                    <Button
                      variant="contained"
                      color="success"
                      type="submit"
                      onClick={logoutHandler}
                    >
                      {value}
                    </Button>
                  </Item>
                </Grid>
              </Grid>
            </Midstyle>
          </Form>
        )}
      </Formik>
    </LayoutTemplate>
  );
}
