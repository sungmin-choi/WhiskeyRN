export const emailValidate = (email: string) => {
  const expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return expression.test(email.toLowerCase());
  //변경
};
