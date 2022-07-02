import AdminSchema from "./AdminUserSchema.js";

export const createNewAdmin = (obj) => {
  return AdminSchema(obj).save();
};

export const updateAdmin = (filter, obj) => {
  return AdminSchema.findOneAndUpdate(filter, obj, { new: true });
};
//filter user must be object ie {email: a@a1.com }
export const getOneAdmin = (filter) => {
  return AdminSchema.findOne(filter)
};
