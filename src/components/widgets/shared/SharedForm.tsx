"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldValues } from "react-hook-form";
import { SharedFormProps } from "@/types";

import { Form, Button } from "@/ui";
import { cn } from "@/lib/utils";

export function SharedForm<T extends FieldValues>({
  schema,
  defaultValues,
  onSubmit,
  buttons,
  renderFields,
}: SharedFormProps<T>) {
  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        {renderFields(form)}
        <Button type="submit" className={cn(buttons?.submit?.className)}>
          {buttons?.submit?.text || "Submit"}
        </Button>
      </form>
    </Form>
  );
}
