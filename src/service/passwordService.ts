export default function generatePass() {
  let password: string = "";
  let passwordLenght = 8;
  let characters: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  for (let index = 0; index < passwordLenght; index++) {
    password += characters.charAt(Math.floor(Math.random()* characters.length));
  }

  return password;
}
