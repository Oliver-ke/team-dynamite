import bcrypt from 'bcryptjs';
const saltRounds = 10;

const salt = bcrypt.genSaltSync(saltRounds);

export const hashPassword = (password) => bcrypt.hashSync(password, salt);

export const comparePassword = (hashedPassword, password) => bcrypt.compareSync(password, hashedPassword);
