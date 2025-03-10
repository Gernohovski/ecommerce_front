const strongPasswordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-+=])[A-Za-z\d!@#$%^&*()\-+=]{8,}$/;

export const validatePassword = (password: string) => {
  return strongPasswordRegex.test(password);
};
