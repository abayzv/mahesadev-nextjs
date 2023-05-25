"use client";

import Select from "@/components/form/select";
import Input from "@/components/form/input";
import { useFormStore } from "../../../lib/store";
import { useState, useRef } from "react";
import type { User, Passenger } from "../../../services/userServices";
import { useRouter } from "next/navigation";
import axios from "axios";
import Icon from "@/components/icon";

interface Options {
  label: string;
  value: string;
}

interface Alert {
  message: string;
  type: string;
  show?: boolean;
}

interface ErrorMessage {
  [key: string]: string;
}

const Alert = ({ message, type, callback }: { message: string; type: string; callback: React.MouseEventHandler<HTMLDivElement> }) => {
  return (
    <div className="bg-red-200 p-7 mb-5 flex justify-between" role="alert">
      <div>
        <strong className="font-bold text-red-700">{type}!</strong>
        <span className="block sm:inline"> {message}</span>
      </div>
      <div onClick={callback} className="cursor-pointer">
        <Icon name="close" size="20" color="#FF000090" />
      </div>
    </div>
  );
};

export default function FormRegister() {
  const { form } = useFormStore();
  const [errorMsg, setErrorMsg] = useState<ErrorMessage>({});
  const [alert, setAlert] = useState<Alert>({
    message: "",
    type: "Error",
    show: false,
  });
  const alertComp = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const userdata: User = {
    email: form.email?.toString(),
    password: form.password?.toString(),
  };

  const passenger: Passenger = {
    name: form.name?.toString(),
    phone: form.phone?.toString(),
    identityType: form.identityType?.toString(),
    identityNumber: form.identityNumber?.toString(),
    gender: form.gender?.toString(),
    birthDate: new Date(form.date?.toString()),
  };

  const validateRules = {
    required:
      "name|email|identityType|identityNumber|date|gender|phone|password",
    password: "password|confirmPassword",
  };

  const camelToTitle = (str: string) => {
    return str.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
      return str.toUpperCase();
    });
  };

  const validate = (form: any, rules: any) => {
    const errors: any = {};

    // required
    if (rules.required) {
      rules.required.split("|").forEach((field: string) => {
        if (!form[field]) {
          errors[field] = `${camelToTitle(field)} Tidak Boleh Kosong`;
        }
      });
    }

    // password
    if (rules.password) {
      rules.password.split("|").forEach((field: string) => {
        if (form[field] !== form["password"]) {
          errors[field] = `${camelToTitle(field)} tidak sama dengan password`;
        }
      });
    }

    setErrorMsg(errors);

    if (Object.keys(errors).length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const genderOption: Options[] = [
    {
      label: "Laki-laki",
      value: "Laki-laki",
    },
    {
      label: "Perempuan",
      value: "Perempuan",
    },
  ];

  const identityOption: Options[] = [
    {
      label: "KTP",
      value: "KTP",
    },
    {
      label: "Passport",
      value: "Passport",
    },
  ];

  const renderError = (field: string) => {
    if (errorMsg[field]) {
      return (
        <span className="text-sm text-red-500 mt-2 block">
          {errorMsg[field]}
        </span>
      );
    }
  };

  const submitForm = async () => {
    const isValidate = validate(form, validateRules);

    if (isValidate) {
      try {
        setIsLoading(true);
        const user = await axios.post("/api/users/register", {
          userdata,
          passenger,
        });
        if (user.data) {
          router.push("/auth/login?register=success");
        }
      } catch (error: any) {
        setIsLoading(false);
        setAlert({
          message: error.response.data.message,
          type: "Error",
          show: true,
        });
        // focus to alert
        alertComp.current?.focus();
      }
    }
  };

  return (
    <div className="w-2/3 mx-auto">
      <div ref={alertComp}>
        {alert.show && <Alert message={alert.message} type={alert.type} callback={()=>{setAlert({...alert, show: false})}} />}
      </div>
      <div className="bg-white p-10 border">
        <h1 className="font-bold text-lg text-blue-800">Biodata</h1>
        <div className="grid grid-cols-3 gap-x-10 gap-y-5 mt-5">
          <div>
            <label
              htmlFor="gender"
              className="text-blue-800 font-medium block mb-2"
            >
              Jenis Kelamin
            </label>
            <Select
              name="gender"
              options={genderOption}
              icon="user"
              placeHolder="Jenis Kelamin"
            />
            {renderError("gender")}
          </div>
          <div className="col-span-2">
            <label
              htmlFor="name"
              className="text-blue-800 font-medium block mb-2"
            >
              Nama Lengkap
            </label>
            <Input
              name="name"
              type="text"
              icon="user"
              placeHolder="Nama Lengkap"
            />
            {renderError("name")}
          </div>
          <div>
            <label
              htmlFor="identity"
              className="text-blue-800 font-medium block mb-2"
            >
              Jenis Identitas
            </label>
            <Select
              name="identityType"
              options={identityOption}
              icon="id-card"
              placeHolder="Jenis Identitas"
            />
            {renderError("identityType")}
          </div>
          <div className="col-span-2">
            <label
              htmlFor="identityNumber"
              className="text-blue-800 font-medium block mb-2"
            >
              Nomor Identitas
            </label>
            <Input
              name="identityNumber"
              type="text"
              icon="id-card"
              placeHolder="Nomor Identitas"
            />
            {renderError("identityNumber")}
          </div>
          <div>
            <label
              htmlFor="date"
              className="text-blue-800 font-medium block mb-2"
            >
              Tanggal Lahir
            </label>
            <Input
              name="date"
              type="date"
              icon="date"
              placeHolder="Tanggal Lahir"
            />
            {renderError("date")}
          </div>
          <div className="col-span-2">
            <label
              htmlFor="email"
              className="text-blue-800 font-medium block mb-2"
            >
              Email
            </label>
            <Input name="email" type="email" icon="mail" placeHolder="Email" />
            {renderError("email")}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="text-blue-800 font-medium block mb-2"
            >
              Nomor Telepon
            </label>
            <Input
              name="phone"
              type="text"
              icon="phone"
              placeHolder="Nomor Telepon"
            />
            {renderError("phone")}
          </div>
        </div>
      </div>
      <div className="bg-white p-10 border mt-5">
        <h1 className="font-bold text-lg text-blue-800">Autentikasi</h1>
        <div className="mt-5 grid gap-5">
          <div>
            <label
              htmlFor="name"
              className="text-blue-800 font-medium block mb-2"
            >
              Password
            </label>
            <Input
              name="password"
              type="password"
              icon="lock"
              placeHolder="Password"
            />
            {renderError("password")}
          </div>
          <div>
            <label
              htmlFor="name"
              className="text-blue-800 font-medium block mb-2"
            >
              Konfirmasi Password
            </label>
            <Input
              name="confirmPassword"
              type="password"
              icon="lock"
              placeHolder="Konfirmasi Password"
            />
            {renderError("confirmPassword")}
          </div>
        </div>
      </div>
      <div className="text-end">
        <button
          disabled={isLoading}
          className="bg-blue-800 text-white p-2 px-5 rounded mt-5 disabled:bg-blue-300"
          onClick={() => {
            submitForm();
          }}
        >
          Daftar
        </button>
      </div>
    </div>
  );
}
