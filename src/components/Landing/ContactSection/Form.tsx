import styled from "@emotion/styled";
import axios from "axios";
import { AppContext } from "@/context";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useContext, useState } from "react";

import {
  FileInput,
  isFileSizeValid,
  uploadFileToS3,
} from "@/components/FileUpload";
import { isValidEmail } from "@/components/Form";
import { getUtmFromCookies } from "@/components/Landing/ContactSection/utm";
import {
  Button,
  InvalidFeedback,
  MobileMiddle,
  Tablet,
  Typography,
  lightGray,
  middleGray,
  primaryBlue,
  primaryGrey,
  red,
  white,
} from "@/components/ui";

import { debounce } from "@/utils/debounce";
import { toPolicy } from "@/utils/routes";

type Validation = {
  name?: string;
  message?: string;
  email?: string;
  file?: string;
};

const Form = () => {
  const { t } = useTranslation();
  const { setIsContactModalOpened } = useContext(AppContext);
  const [form, setForm] = useState<{
    name: string;
    message: string;
    email: string;
    file: File | null;
  }>({
    name: "",
    message: "",
    email: "",
    file: null,
  });
  const [validationErrors, setValidationErrors] = useState<Validation>({});
  const router = useRouter();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target?.files?.length) {
      return;
    }
    setForm({
      ...form,
      file: e.target.files[0],
    });
  };
  const removeFile = () => {
    setForm({
      ...form,
      file: null,
    });
  };

  function validateContactForm(formData: {
    name: string;
    message: string;
    email: string;
    file: File | null;
  }) {
    const errors: Validation = {};

    if (!formData.message) {
      errors.message = t("formErrors.messageRequired");
    }

    if (!formData.name) {
      errors.name = t("formErrors.nameRequired");
    } else if (formData.name.length > 50) {
      errors.name = t("formErrors.nameLength");
    }

    if (!formData.email) {
      errors.email = t("formErrors.emailRequired");
    } else if (!isValidEmail(formData.email)) {
      errors.email = t("formErrors.emailInvalid");
    }

    if (formData.file && !isFileSizeValid(formData.file)) {
      errors.file = t("formErrors.fileSize");
    }

    return errors;
  }

  const handleSubmit = async (e: SubmitEvent) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      const errors = validateContactForm(form);
      setValidationErrors(errors);
      if (Object.keys(errors).length > 0) {
        return;
      }
      const { message, name, email, file } = form;
      const fileUrl = file ? await uploadFileToS3(file) : null;

      const utm = getUtmFromCookies();

      await axios.post(
        "https://hook.eu1.make.com/9clm2ypnd5a3rap2intr5vw4is8yizdq",
        {
          message,
          name,
          email,
          fileUrl,
          locale: router.locale,
          path: router.asPath,
          ...utm,
        }
      );

      setIsContactModalOpened(true);
      setForm({ name: "", message: "", email: "", file: null });
    } catch (e: unknown) {
      console.log(e);
      alert((e as Error).message);
    }
  };

  const debouncedSubmit = debounce(handleSubmit);

  const handleDebouncedSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    debouncedSubmit(e);
  };

  return (
    <>
      <form
        id="contact-form"
        name="contact"
        onSubmit={handleDebouncedSubmit}
        method="POST"
      >
        <Group>
          <Label>
            {t("contacts.formTitle")}
            <TextArea
              as="textarea"
              name="message"
              id="message"
              isError={!!validationErrors.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              value={form.message}
              placeholder={t("contacts.textPlaceholder")}
            />
          </Label>
          <InvalidFeedback>
            {validationErrors.message && <p>{validationErrors.message}</p>}
          </InvalidFeedback>
        </Group>
        <Group>
          <Label>
            {t("contacts.name")}
            <Input
              type="text"
              name="name"
              id="name"
              isError={!!validationErrors.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              value={form.name}
              placeholder={t("contacts.namePlaceholder")}
            />
          </Label>
          <InvalidFeedback>
            {validationErrors.name && <p>{validationErrors.name}</p>}
          </InvalidFeedback>
        </Group>
        <Group>
          <Label>
            {t("contacts.email")}
            <Input
              type="text"
              name="email"
              id="email"
              isError={!!validationErrors.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              value={form.email}
              placeholder={t("contacts.emailPlaceholder")}
            />
          </Label>
          <InvalidFeedback>
            {validationErrors.email && <p>{validationErrors.email}</p>}
          </InvalidFeedback>
        </Group>
        <Group>
          <FileInput
            handleFileChange={handleFileChange}
            buttonText={t("contacts.attachFile")}
            removeFile={removeFile}
            value={form.file}
          />
          <InvalidFeedback>
            {validationErrors.file && <p>{validationErrors.file}</p>}
          </InvalidFeedback>
        </Group>
        <Button type="submit" size="stretch">
          {t("cta.getInTouch")}
        </Button>
        <Privacy type="b4">
          {t("contacts.agreementMessage")}{" "}
          <Link href={toPolicy(t("routes.privacy-policy"))} target="_blank">
            {t("contacts.privacyPolicy")}
          </Link>
        </Privacy>
      </form>
    </>
  );
};
const Privacy = styled(Typography)`
  margin-top: 2rem;
  a {
    color: ${middleGray};
  }
  color: ${middleGray};
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;
export default Form;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;

  ${MobileMiddle} {
    margin-top: 0.5rem;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 24px;
  color: ${primaryGrey};

  ${MobileMiddle} {
    font-size: 14px;
  }
`;

const Input = styled.input<{ isError: boolean }>`
  background: ${white};
  border: 1px solid ${({ isError }) => (isError ? red : lightGray)};
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: 0.5rem;
  color: ${primaryGrey};
  font-size: 14px;
  line-height: 20px;
  padding: 0.5rem 1rem;
  appearance: none;
  height: 40px;

  &::placeholder {
    opacity: 0.5;
  }

  ${MobileMiddle} {
    line-height: 15px;
  }

  &:focus {
    border: 1px solid ${primaryBlue};
  }
`;

const TextArea = styled(Input)`
  max-height: 160px;
  resize: vertical;
  min-height: 92px;

  ${Tablet} {
    max-height: 92px;
  }
`;
