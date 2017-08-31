export const TEMPLATE = "TEMPLAATE";
export const USER_CODE = "USER_CODE";

// return a payload of template to update the projectType to template
export const toTemplate = () => {
  return {
    type: TEMPLATE,
    template: 'template',
  };
}

export const toUserCode = () => {
  return {
    type: USER_CODE,
    userCode: 'userCode',
  };
}