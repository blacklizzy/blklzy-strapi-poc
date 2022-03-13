module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9bc47cb6dabaf972b9250c133af8afef'),
  },
});
