import { useForm } from "@mantine/form";
import { TextInput, Button, Group, PasswordInput } from "@mantine/core";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from 'react-router-dom'


import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "./userSlice/userSlice";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate()
  

  const { loading, errorMessage: error, currentUser } = useSelector((state) => state.user);
  console.log(loading, error);


  useEffect(() => {
    currentUser && nav('/admin/artists')
  }, [currentUser,nav])

  const form = useForm({
    initialValues: {
      email: "waiminhein12@gmail.com",
      password: "11111111",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });



  const onSubmit = async (event, {email,password}) => {
    event.preventDefault();

    try {
      dispatch(signInStart());

      const res = await axios.post("http://localhost:7000/api/auth/login/", {email,password});

      const data = res?.data;

      if (data) {
        dispatch(signInSuccess(data));
        nav('/admin/dashboard')
      } else {
        dispatch(signInFailure("Cannot login"));
        nav('/login')
      }
    } catch (error) {
      dispatch(signInFailure(error.response.data.message));
    }
  };

  return (
    <div className="grid place-items-center">
      <form
        className="w-[20rem]"
        onSubmit={form.onSubmit((values) => onSubmit(event, values))}
      >
        <TextInput
          mt="sm"
          label="Email"
          placeholder="Email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Password"
          placeholder="Password"
          {...form.getInputProps("password")}
        />

        <Group mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </div>
  );
};

export default Login;
