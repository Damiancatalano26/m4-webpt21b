import validator from "validator";

export const validateEmail = (email: string) => {
  if (!validator.isEmail(email)) {
    return "No tiene formato email";
  }
  return "";
};

export const validatePassword = (password: string) => {
  if (password.length < 6) {
    return "La contraseña debe tener al menos 6 caracteres.";
  }
  return "";
};

export const validateName = (name: string) => {
  if (validator.isEmpty(name)) {
    return "El nombre no puede estar vacío.";
  }
  return "";
};

export const validateAddress = (address: string) => {
  if (validator.isEmpty(address)) {
    return "La dirección no puede estar vacía.";
  }
  return "";
};

export const validatePhone = (phone: string) => {
  if (!validator.isMobilePhone(phone, "es-AR")) {
    return "Número de teléfono no válido.";
  }
  return "";
};
