"use client";

import { FC, useCallback, useMemo, useState } from "react";
import { Button, Title } from "@/components";
import { ConnectionsList } from ".";
import {
  connectionsList,
  DEFAULT_STEP,
  FIRST_STEP,
  SECOND_STEP,
  THIRD_STEP,
} from "../constants";
import { ConnectContext } from "../context";

import { ConnectingModal } from "./ConnectingModal";
import { ConfirmEmailModal } from "./ConfirmEmailModal";
import { DownloadingDataModal } from "./DownloadingDataModal";

export const ConnectPageInner: FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [step, setStep] = useState(DEFAULT_STEP);

  const handleCloseConnectingModal = useCallback(() => {
    setStep(DEFAULT_STEP);
    setTimeout(() => {
      setActiveId(null);
    }, 300);
  }, []);

  const foundConnection = useMemo(() => {
    if (!activeId) return;

    return connectionsList.find(({ id }) => activeId === id);
  }, [activeId]);

  const context = useMemo(
    () => ({
      activeId,
      setActiveId,
      step,
      setStep,
    }),
    [activeId, step]
  );

  const isOpenConnectingModal = useMemo(
    () => Boolean(step === FIRST_STEP && activeId),
    [activeId, step]
  );

  const isOpenEmilConfirmModal = useMemo(
    () => Boolean(step === SECOND_STEP && activeId),
    [activeId, step]
  );

  const isOpenDownloadingModal = useMemo(
    () => Boolean(step === THIRD_STEP && activeId),
    [activeId, step]
  );

  return (
    <ConnectContext.Provider value={context}>
      <div className="center column w-full h-full">
        <div className="column mb-10">
          <Title
            text={"Select platforms to connect to Stacked"}
            className="text-center mb-5"
          />
          <p className="body-base text-center text-subdued">
            Connect tools to manage your Leagues.
          </p>
          <p className="body-base text-center text-subdued">
            Add at least one now, you can always add more later.
          </p>
        </div>

        <div className="mb-10 w-full">
          <ConnectionsList list={connectionsList} />
        </div>

        <Button className="h-12">
          <span className="label-medium text-main-background">Continue</span>
        </Button>

        <ConnectingModal
          isOpen={isOpenConnectingModal}
          close={handleCloseConnectingModal}
          foundConnection={foundConnection}
        />

        <ConfirmEmailModal
          isOpen={isOpenEmilConfirmModal}
          close={handleCloseConnectingModal}
          foundConnection={foundConnection}
        />

        <DownloadingDataModal
          isOpen={isOpenDownloadingModal}
          close={handleCloseConnectingModal}
          foundConnection={foundConnection}
        />
      </div>
    </ConnectContext.Provider>
  );
};
