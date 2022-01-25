module.exports = {
  dialect: "mysql",
  port: 3310,
  host: "localhost",
  username: "root",
  password: "root",
  database: "project_automatic_whatsapp",
  define: {
    timestamps: true,
    underscored: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
  dialectOptions: {
    timezone: "-03:00",
  },
  timezone: "-03:00",
  logging: false,
};
