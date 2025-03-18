import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService"; // API çağrısı için ekledik
import loginImage from '../assets/login.jpg';

import { 
  Card, 
  Input, 
  Checkbox, 
  Button, 
  Typography 
} from "@material-tailwind/react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login(email, password);
      alert("Giriş başarılı!");
      navigate("/"); // Başarılı giriş sonrası yönlendirme
    } catch (error) {
      alert("Geçersiz e-posta veya şifre!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center gap-10">
        {/* Left: Login Form */}
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Login
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to log in.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                size="lg"
                placeholder="name@mail.com"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                size="lg"
                placeholder="********"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              />
            </div>
            <Checkbox
              label={
                <Typography variant="small" color="gray" className="flex items-center font-normal">
                  I agree to the
                  <a href="#" className="font-medium transition-colors hover:text-gray-900">
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />

            <Button type="submit" className="mt-6" fullWidth>
              Login
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Don't have an account?{" "}
              <a href="/register" className="font-medium text-blue-500">
                Register
              </a>
            </Typography>
          </form>
        </Card>

        {/* Right: Image */}
        <div className="hidden lg:block w-[400px]">
          <img src={loginImage} alt="Login Illustration" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
