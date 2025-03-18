import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerImage from "../assets/login.jpg";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { name, email, password };

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Kayıt başarısız!");
      }

      localStorage.setItem("userInfo", JSON.stringify(data));
      alert("Kayıt başarılı!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center gap-10">
        {/* Sağ Taraftaki Görsel */}
        <div className="hidden lg:block max-w-[400px] w-full">
          <img
            src={registerImage}
            alt="Register Illustration"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Sol Taraftaki Form */}
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Register
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>

          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray">
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />

              <Typography variant="h6" color="blue-gray">
                Your Email
              </Typography>
              <Input
                type="email"
                size="lg"
                placeholder="name@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />

              <Typography variant="h6" color="blue-gray">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
              required
            />

            <Button type="submit" className="mt-6" fullWidth>
              Register
            </Button>

            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
