var DataTypes = require("sequelize").DataTypes;
var _appointment_parts = require("./appointment_parts");
var _appointment_status_updates = require("./appointment_status_updates");
var _appointments = require("./appointments");
var _audit_logs = require("./audit_logs");
var _notifications = require("./notifications");
var _parts = require("./parts");
var _pickup_schedules = require("./pickup_schedules");
var _suppliers = require("./suppliers");
var _users = require("./users");
var _vehicles = require("./vehicles");

function initModels(sequelize) {
  var appointment_parts = _appointment_parts(sequelize, DataTypes);
  var appointment_status_updates = _appointment_status_updates(sequelize, DataTypes);
  var appointments = _appointments(sequelize, DataTypes);
  var audit_logs = _audit_logs(sequelize, DataTypes);
  var notifications = _notifications(sequelize, DataTypes);
  var parts = _parts(sequelize, DataTypes);
  var pickup_schedules = _pickup_schedules(sequelize, DataTypes);
  var suppliers = _suppliers(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var vehicles = _vehicles(sequelize, DataTypes);

  appointment_parts.belongsTo(appointments, { as: "appointment", foreignKey: "appointment_id"});
  appointments.hasMany(appointment_parts, { as: "appointment_parts", foreignKey: "appointment_id"});
  appointment_status_updates.belongsTo(appointments, { as: "appointment", foreignKey: "appointment_id"});
  appointments.hasMany(appointment_status_updates, { as: "appointment_status_updates", foreignKey: "appointment_id"});
  notifications.belongsTo(appointments, { as: "appointment", foreignKey: "appointment_id"});
  appointments.hasMany(notifications, { as: "notifications", foreignKey: "appointment_id"});
  pickup_schedules.belongsTo(appointments, { as: "appointment", foreignKey: "appointment_id"});
  appointments.hasOne(pickup_schedules, { as: "pickup_schedule", foreignKey: "appointment_id"});
  appointment_parts.belongsTo(parts, { as: "part", foreignKey: "part_id"});
  parts.hasMany(appointment_parts, { as: "appointment_parts", foreignKey: "part_id"});
  parts.belongsTo(suppliers, { as: "supplier", foreignKey: "supplier_id"});
  suppliers.hasMany(parts, { as: "parts", foreignKey: "supplier_id"});
  appointment_parts.belongsTo(users, { as: "requested_by_user", foreignKey: "requested_by"});
  users.hasMany(appointment_parts, { as: "appointment_parts", foreignKey: "requested_by"});
  appointment_parts.belongsTo(users, { as: "approved_by_user", foreignKey: "approved_by"});
  users.hasMany(appointment_parts, { as: "approved_by_appointment_parts", foreignKey: "approved_by"});
  appointment_status_updates.belongsTo(users, { as: "created_by_user", foreignKey: "created_by"});
  users.hasMany(appointment_status_updates, { as: "appointment_status_updates", foreignKey: "created_by"});
  appointments.belongsTo(users, { as: "client", foreignKey: "client_id"});
  users.hasMany(appointments, { as: "appointments", foreignKey: "client_id"});
  appointments.belongsTo(users, { as: "mechanic", foreignKey: "mechanic_id"});
  users.hasMany(appointments, { as: "mechanic_appointments", foreignKey: "mechanic_id"});
  audit_logs.belongsTo(users, { as: "performed_by_user", foreignKey: "performed_by"});
  users.hasMany(audit_logs, { as: "audit_logs", foreignKey: "performed_by"});
  notifications.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(notifications, { as: "notifications", foreignKey: "user_id"});
  vehicles.belongsTo(users, { as: "owner", foreignKey: "owner_id"});
  users.hasMany(vehicles, { as: "vehicles", foreignKey: "owner_id"});
  appointments.belongsTo(vehicles, { as: "vehicle", foreignKey: "vehicle_id"});
  vehicles.hasMany(appointments, { as: "appointments", foreignKey: "vehicle_id"});

  return {
    appointment_parts,
    appointment_status_updates,
    appointments,
    audit_logs,
    notifications,
    parts,
    pickup_schedules,
    suppliers,
    users,
    vehicles,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
