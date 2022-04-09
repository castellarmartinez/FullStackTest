import User from '../models/user';

const addUser = async (newUser: JSON) => {
  const user = new User(newUser);

  try {
    return await user.save();
  } catch (error) {
    return console.log(error);
  }
}

export { addUser }