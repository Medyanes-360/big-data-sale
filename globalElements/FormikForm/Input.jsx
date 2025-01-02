"use client";
import React from "react";
import { useField, ErrorMessage } from "formik";

/**
 * @Props as = aşağıdaki error componentinin olması istediğin etiket anlamına geliyor mesela div - span-vs.
 * @Props labelClassName = labele verilecek className
 * @props label = ise labelin alacağı text anlamına geliyor
 * @props errorClassName <ErrorMessage> componentine vermek istediiğiniz özellikler
 * @props right callback orn: ()=>React.Node function ile component aliyor. Inputun sag kismina ReactNode olarak istedigimiz componenti ekleyebiliyoruz
 * @component
 */
function Input({
  label,
  as = "span",
  errorClassName,
  labelClassName,
  right: Icon,
  ...props
}) {
  const [field, meta, helpers] = useField(props?.name);

  return (
    <>
      {label && <label className={labelClassName}>{label}</label>}
      <div className="relative">
        <input
          {...field}
          {...props}
          className={`${props.className} transition-all duration-500 ${
            meta.touched && meta.error ? "!border-red-500" : "border-gray-300"
          }${Icon ? "pr-12" : ""}`}
        />
        {Icon && (
          <div className="absolute right-3 inset-y-0 flex items-center text-gray-500">
            <Icon />
          </div>
        )}
      </div>
      <ErrorMessage
        component={as}
        name={props?.name}
        className={`${errorClassName} ${
          meta.touched && meta.error ? "block" : "hidden"
        }`}
      />
    </>
  );
}

export default Input;
