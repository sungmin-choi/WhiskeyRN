export const emailValidate = (email: string) => {
  const expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return expression.test(email.toLowerCase());
  //머지 변경
};
export const trashFunction = () => {
  const transh = 'dddd';
  return transh;
};
