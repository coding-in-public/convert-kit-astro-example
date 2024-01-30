const validateEmail = (email: string) => {
  const re = /^([a-z0-9_.-]+@[\da-z.-]+\.[a-z.]{2,6})$/;
  return re.test(email.toLowerCase());
};

export default validateEmail;
