export default function validate(inputs) {
    const errors = {};
  
    const regexEmail = /\S+@\S+\.\S+/;
    const regexPass = new RegExp(
      "^(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{6,10}$"
    );
  
    if (!regexEmail.test(inputs.username)) {
      errors.username = "Name must be a valid email addres";
    }
    if (!inputs.username) {
      errors.username = "Add your neme";
    }
    if (inputs.username.length > 35) {
      errors.username = "Max length 35";
    }
    if (!regexPass.test(inputs.password)) {
      errors.password = "Add pass 6-10 characters";
    }
  
    return errors;
  }