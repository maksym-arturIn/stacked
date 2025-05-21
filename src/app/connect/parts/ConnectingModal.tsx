import { FC, useCallback } from "react";
import * as Yup from "yup";
import Image from "next/image";
import { Button, Modal, TextField } from "@/components";
import { emailRegex } from "@/constants";
import { useFormik } from "formik";
import { ConnectionItemType, SECOND_STEP } from "../constants";
import { useConnectState } from "../context";

const validationSchema = Yup.object().shape({
  email: Yup.string().matches(emailRegex, "Eneter a valid email").required(),
  password: Yup.string().min(6).required(),
});

type InitialValues = {
  email: string;
  password: string;
};

const initialValues: InitialValues = {
  email: "",
  password: "",
};

type Props = {
  isOpen: boolean;
  close: () => void;
  foundConnection: ConnectionItemType | undefined;
};

export const ConnectingModal: FC<Props> = ({
  isOpen,
  close,
  foundConnection,
}) => {
  const { setStep } = useConnectState();

  const onSubmit = useCallback(() => {
    setStep(SECOND_STEP);
  }, [setStep]);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Modal isOpen={isOpen} close={close}>
      <div className="">
        <div className="">
          <div className="flex gap-3 items-center mb-8">
            {foundConnection && (
              <Image
                src={foundConnection.icon}
                alt={foundConnection.title}
                width={20}
                height={20}
              />
            )}
            <p className="label-medium">Connecting {foundConnection?.title}</p>
          </div>

          <form className="column gap-5" onSubmit={formik.handleSubmit}>
            <div className="column gap-3">
              <TextField
                icon="/icons/email.svg"
                placeholder="Email address"
                formik={formik}
                name={"email"}
              />
              <TextField
                icon="/icons/lock.svg"
                placeholder="Password"
                formik={formik}
                name={"password"}
              />
            </div>
            <Button className="h-12" type="submit">
              <span className="label-medium text-main-background">Sign in</span>
            </Button>
          </form>
        </div>
      </div>
    </Modal>
  );
};
