"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "../ui/select";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";
import type { SelectItems } from "@/types/SelectItems";
import { FormField, FormItem, Form } from "../ui/form";
import { useRef } from "react";

interface SelectInputProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: keyof T;
  placeholder: string;
  items: SelectItems[];
  submitOnChange?: boolean;
}

export function SelectForm<T extends FieldValues>({
  form,
  name,
  placeholder,
  items,
  submitOnChange,
}: SelectInputProps<T>) {
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name={name as Path<T>}
        render={({ field }) => (
          <FormItem>
            <Select
              onValueChange={(value) => {
                field.onChange(value);
                submitButtonRef.current?.click();
              }}
              defaultValue={field.value ? String(field.value) : undefined}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {items.map((item) => (
                  <SelectGroup key={item.group.name}>
                    <SelectLabel>{item.group.name}</SelectLabel>
                    {item.group.items.map((groupItem) => (
                      <SelectItem key={groupItem.value} value={groupItem.value}>
                        {groupItem.text}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
      {submitOnChange && <button ref={submitButtonRef} type="submit" hidden />}
    </Form>
  );
}
