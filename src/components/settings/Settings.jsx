import React from "react";
import { ReactComponent as SettingsBtn } from "../../assets/settings.svg";
import "./settings.scss";

export default function Settings() {
  return (
    <div>
      <SettingsBtn className="settings-icon" />
    </div>
  );
}
