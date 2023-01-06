const rules = {
  firstName: [
    {
      required: true,
      message: ''
    }
  ],
  lastName: [
    {
      required: true,
      message: ''
    }
  ],
  email: [
    {
      required: true,
      message: ''
    }
  ],
  phone: [
    {
      required: true,
      message: ''
    }
  ],
  password: [
    {
      required: true,
      message: ''
    }
  ],
  confirmPassword: [
    {
      required: true,
      message: 'Les deux mot de passe doivent être identique'
    }
  ],
  age: [
    {
      required: true,
      message: ''
    }
  ],
  status: [
    {
      required: true,
      message: ''
    }
  ]
};

const rules2 = {
  firstName: [
    {
      required: true,
      message: ''
    }
  ],
  lastName: [
    {
      required: true,
      message: ''
    }
  ],
  email: [
    {
      required: true,
      message: ''
    }
  ],
  phone: [
    {
      required: true,
      message: ''
    }
  ],
  password: [
    {
      required: true,
      message: ''
    }
  ],
  confirmPassword: [
    {
      required: true,
      message: 'Les deux mot de passe doivent être identique',
      validator: validatePass2,
      trigger: 'change'
    }
  ],
  age: [
    {
      required: true,
      message: ''
    }
  ],
  status: [
    {
      required: true,
      message: ''
    }
  ],
  companyName: [
    {
      required: true,
      message: ''
    }
  ],
  siret: [
    {
      required: true,
      message: ''
    }
  ],
  companyAdresse: [
    {
      required: true,
      message: ''
    }
  ],
  companyDepartment: [
    {
      required: true,
      message: ''
    }
  ],
  categories: [
    {
      required: true,
      message: ''
    }
  ]
};
export default { rules, rules2 };
