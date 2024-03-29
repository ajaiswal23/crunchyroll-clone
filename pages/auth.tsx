import axios from "axios";
import { useCallback, useState } from "react";
import { NextPageContext } from "next";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

import { toastConfig } from "@/libs/notification";
import { toast } from "react-toastify";

import Input from "@/components/Input";
import Image from "next/image";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Auth = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const isInputValid = useCallback(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email", toastConfig);
      return false;
    }

    if (password.length < 5) {
      toast.error("Password must be at least 5 characters", toastConfig);
      return false;
    }

    return true;
  }, [email, password]);

  const login = useCallback(async () => {
    try {
      if (!isInputValid()) return;
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });

      if (response?.error) {
        toast.error(response.error, toastConfig);
        return;
      } else {
        toast.success("Logged in successfully", toastConfig);
      }

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router, isInputValid]);

  const register = useCallback(async () => {
    try {
      if (!isInputValid()) return;

      await axios.post("/api/register", {
        email,
        name,
        password,
      }).then((response) => {
        toast.success("Registered successfully", toastConfig);
        login();
      }
      ).catch((error) => {
        toast.error(error.response.data.error, toastConfig);
      });

    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login, isInputValid]);

  return (
    <div className="relative h-full w-full bg-hero-pattern bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full md:bg-opacity-50">
        <nav className="flex w-full items-center justify-center px-12 pt-12 py-5">
          <Image
            src="/assets/images/Crunchyroll.png"
            height={40}
            width={250}
            alt="Logo"
          />
        </nav>
        <div className="flex justify-center mt-24">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-2xl rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="name"
                  type="text"
                  label="Username"
                  value={name}
                  onChange={(e: any) => setName(e.target.value)}
                />
              )}
              <Input
                id="email"
                type="email"
                label="Email address "
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                id="password"
                label="Password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={variant === "login" ? login : register}
              className="bg-crunchy-color py-3 text-white rounded-md w-full mt-10 hover:bg-crunchy-color/60 transition"
            >
              {variant === "login" ? "Login" : "Sign up"}
            </button>

            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "First time using Crunchyroll?"
                : "Already have an account with us?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
