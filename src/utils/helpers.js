import axios from 'axios';

// Function to encrypt password using permutation cipher
export const encode = ({ password, key }) => {
  axios.post(`http://localhost:8000/encode`, { password, key }).then((res) => {
    const encodedPassword = res.data;
    const current = new Date();
    const time = current.toLocaleString();
    // eslint-disable-next-line no-console
    return { encodedPassword: encodedPassword, time: time };
    // return { encodedPassword: res.data, time: time };
  });

  // const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // const permutedKey = key.toUpperCase();
  // const normalPassword = password.toUpperCase();
  // const current = new Date();

  // let encodedPassword = '';
  // let i = 0;

  // while (i < password.length) {
  //   // eslint-disable-next-line no-undef
  //   const index = alphabet.indexOf(normalPassword.charAt(i));
  //   encodedPassword = encodedPassword + permutedKey.charAt(index);
  //   i++;
  // }

  // const time = current.toLocaleString();

  // return { encodedPassword: encodedPassword, time: time };
};

// Function to validate form values
export const validate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = 'Password is a required field';
  }
  if (/\s/.test(values.password)) {
    errors.password = 'Password must not contain whitespace';
  }
  if (!(values.key.length === 26)) {
    errors.key = 'Key must be 26 characters long';
  }
  if (/\s/.test(values.key)) {
    errors.key = 'Key must not contain whitespace';
  }
  return errors;
};
