import OriginAlert from './Alert';
import AlertHeader from './AlertHeader';
import AlertBody from './AlertBody';
import AlertLink from './AlertLink';

export type AlertProps = typeof OriginAlert & {
  Header: typeof AlertHeader;
  Body: typeof AlertBody;
  Link: typeof AlertLink;
};

const Alert = OriginAlert as AlertProps;

Alert.Header = AlertHeader;
Alert.Body = AlertBody;
Alert.Link = AlertLink;

export default Alert;
