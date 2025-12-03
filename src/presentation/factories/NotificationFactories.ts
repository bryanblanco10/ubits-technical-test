import * as Constants from "../../constants";
import { ErrorNotification, InfoNotification, SuccessNotification, WarningNotification } from "../components";
import { NotificationType } from "../types";
type ComponentsMap = {
  [key: string]: any;
};

const COMPONENTS: ComponentsMap = {
  [Constants.SUCCESS]: SuccessNotification,
  [Constants.ERROR]: ErrorNotification,
  [Constants.INFO]: InfoNotification,
  [Constants.WARNING]: WarningNotification,
};

export class NotificationFactory {
  public static getComponent(type: NotificationType) {
    return COMPONENTS[type];
  }
}
