// "use client";

// import { FC } from "react";
// import ReactCodeInput, { ReactCodeInputProps } from "react-code-input";

// type Props = {
//   name: string;
//   inputMode?: ReactCodeInputProps["inputMode"];
// } & Omit<ReactCodeInputProps, "inputMode">;

// export const CodeField: FC<Props> = ({
//   fields = 6,
//   type = "text",
//   inputMode = "numeric",
//   ...props
// }) => {
//   const totalGapDefault = (fields - 1) * 8;

//   const widthDefault = `calc((100% - ${totalGapDefault}px) / ${fields})`;

//   return (
//     <ReactCodeInput
//       inputMode={inputMode}
//       inputStyle={{
//         width: widthDefault,
//         backgroundColor: "rgba(255,255,255,0.1)",
//         height: "5rem",
//         borderRadius: "0.25rem",
//         color: "#FFFFF6",
//         fontWeight: "400",
//         fontSize: "2.5rem",
//         textAlign: "center",
//         lineHeight: "1.5rem",
//       }}
//       inputStyleInvalid={{
//         width: widthDefault,
//       }}
//       className="!flex !flex-nowrap !gap-2 md:!gap-5 [&>input]:md:!w-[calc((100%-100px)/6)]"
//       fields={fields}
//       type={type}
//       {...props}
//     />
//   );
// };

"use client";

import { FC } from "react";
import ReactCodeInput, { ReactCodeInputProps } from "react-code-input";

type Props = {
  name: string;
  inputMode?: ReactCodeInputProps["inputMode"];
} & Omit<ReactCodeInputProps, "inputMode">;

export const CodeField: FC<Props> = ({
  fields = 6,
  type = "text",
  inputMode = "numeric",
  ...props
}) => {
  return (
    <ReactCodeInput
      inputMode={inputMode}
      inputStyle={{
        backgroundColor: "rgba(255,255,255,0.1)",
        height: "5rem",
        borderRadius: "0.25rem",
        color: "#FFFFF6",
        fontWeight: "400",
        fontSize: "2.5rem",
        textAlign: "center",
        lineHeight: "1.5rem",
      }}
      className={
        "!flex !flex-nowrap !gap-2 md:!gap-5 [&>input]:!w-[calc((100%-40px)/6)] md:[&>input]:!w-[calc((100%-100px)/6)]"
      }
      fields={fields}
      type={type}
      {...props}
    />
  );
};
