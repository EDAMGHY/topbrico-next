"use client";

import { useState } from "react";
import { ProfileType } from "../shared";
import { Register } from "./Register";
import { IProfileType } from "@/types";

export const RegisterPage = () => {
  const [selectedType, setSelectedType] = useState<IProfileType>(null);

  if (selectedType === null) {
    return <ProfileType setSelectedType={setSelectedType} />;
  }

  return <Register type={selectedType} />;
};
