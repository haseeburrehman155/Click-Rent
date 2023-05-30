import { useEffect, useState } from 'react'
import { Collapser } from '../../components/Collapser'
import { getTranslation } from '../../heplers/translationHelper'
import { ReminderTemplateDialog } from '../tanents/components/reminderTemplateDialog'
import { ReminderSettings } from './reminderSettings'
import { Settings } from './settingsSMTP'
import { SMSReminderSettings } from './smsReminderSettings'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
export const SettingList = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "Clear_All_BreadCrumb" });
    dispatch({
      type: "Add_BreadCrumb",
      payload: {
        title: getTranslation(" Setting ", " Param�tres ", " Einstellungen"),
        url: "/settings",
      },
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>
          {getTranslation("Setting", "Setting", "Setting")}
        </title>
      </Helmet>
      <Collapser title={getTranslation("SMTP Settings", "Param�tres SMTP", "SMTP-Einstellungen")}>
        <Settings />
      </Collapser>
      <br />
      <Collapser title={getTranslation("E-mail Reminder Settings", "Param�tres de rappel par e-mail", "E-Mail-Erinnerungseinstellungen")}>
        <ReminderSettings />
      </Collapser>
      <br />
      <Collapser title={getTranslation("SMS Reminder Settings", "Param�tres de rappel SMS", "SMS-Erinnerungseinstellungen")}>
        <SMSReminderSettings />
      </Collapser>
      <br />
      <Collapser title={getTranslation("Send By Post Templates", "Send By Post Templates", "Send By Post Templates")}>
        <ReminderSettings reminderType="sendByPost" />
      </Collapser>
      <br />
    </>
  )
}