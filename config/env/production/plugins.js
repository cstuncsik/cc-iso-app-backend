module.exports = ({ env }) => ({
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('PROD_CLOUDINARY_NAME'),
      api_key: env('PROD_CLOUDINARY_KEY'),
      api_secret: env('PROD_CLOUDINARY_SECRET'),
    },
  },
});
