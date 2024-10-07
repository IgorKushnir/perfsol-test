import styled from "@emotion/styled";
import { AppContext } from "@/context";
import Image from "next/image";
import { useContext } from "react";

import { Button, Typography } from "@/components/ui";

import { Modal } from "./Modal";

export const ContactModal = () => {
  const { setIsContactModalOpened, isContactModalOpened } =
    useContext(AppContext);

  return (
    <Modal
      showModal={isContactModalOpened}
      closeModal={() => setIsContactModalOpened(false)}
    >
      <Wrap>
        <Typography as="h2" type="h2" marginBottom={18}>
          Thank you for getting in touch
        </Typography>
        <Typography type="b3" marginBottom={36}>
          Our experts will reach you out soon
        </Typography>
        <Image
          src="/img/svg/contact-form-main.svg"
          width={198}
          height={129}
          alt="Contact form"
        />
        <ButtonWrap>
          <Button size="s" onClick={() => setIsContactModalOpened(false)}>
            Ok
          </Button>
        </ButtonWrap>
      </Wrap>
    </Modal>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-top: 40px;
`;
