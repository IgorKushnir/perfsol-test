export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhoneNumber = (phoneNumber: string) => {
  const phoneRegex = /^\+380 \([0-9*]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/;
  return phoneRegex.test(phoneNumber);
};
