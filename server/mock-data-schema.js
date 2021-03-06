export const schema = {
  type: 'object',
  properties: {
    // json-server will expose this as an endpoint
    users: {
      type: 'array',
      minItems: 3,
      maxItems: 5,
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            unique: true,
            minimum: 1
          },
          firstName: {
            type: 'string',
            faker: 'name.firstName'
          },
          lastName: {
            type: 'string',
            faker: 'name.lastName'
          },
          email: {
            type: 'string',
            faker: 'internet.email'
          }
        },
        required: ['id', 'firstName', 'lastName', 'email'] // These properties will not be generated if not required
      }
    }
  },
  required: ['users']
};
