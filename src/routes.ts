import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();

//routes settings
routes.post('/settings', settingsController.create);

//routes users
routes.post('/users', usersController.create);


export { routes };