import { Dispatch, SetStateAction } from "react";
import { FieldValues, useForm, UseFormProps } from "react-hook-form";
import { ZodSchema } from "zod";

export type IProfileType = "artisan" | "client" | null;

export interface IProfileTypeProps {
  setSelectedType: Dispatch<SetStateAction<IProfileType>>;
}

// Define a generic shared form component
export type SharedFormProps<T extends FieldValues> = {
  schema: ZodSchema<T>;
  defaultValues: UseFormProps<T>["defaultValues"];
  onSubmit: (data: T) => void;
  renderFields: (form: ReturnType<typeof useForm<T>>) => React.ReactNode;
  buttons?: {
    submit: {
      text?: string;
      className: string;
    };
    reset?: {
      text: string;
      className: string;
    };
  };
};
