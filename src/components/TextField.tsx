import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { FormikValues } from "formik";
import classNames from "classnames";
import Image from "next/image";

type PropsInput = {
  formik: FormikValues;
  name: string;
  icon?: string;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "name" | "value" | "onChange" | "onBlur"
>;

export const TextField: FC<PropsInput> = ({
  formik,
  name,
  className = "",
  icon,
  ...props
}) => {
  const errorMessage = formik.errors[name];
  const isError = Boolean(errorMessage) && Boolean(formik.touched[name]);

  return (
    <div className="column gap-2.5 w-full">
      <div className="relative w-full">
        {icon && (
          <Image
            className="absolute left-2.5 top-1/2 -translate-y-1/2"
            src={icon}
            alt={icon}
            width={20}
            height={20}
          />
        )}
        <input
          name={name}
          id={name}
          className={classNames(
            "rounded-sm text-subdued p-2.5 w-full bg-white/10 focus-visible:outline-none focus-visible:bg-white/15",
            {
              "pl-10": icon,
            },
            className
          )}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          {...props}
        />
      </div>

      {isError && <p className="text-red-400">{errorMessage}</p>}
    </div>
  );
};
