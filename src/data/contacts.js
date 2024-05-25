import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";

export const contacts = [
  { icon: <FaLocationDot />, info: "123 Fake Ave, Chicago, IL 60602", path: 'https://maps.app.goo.gl/CEWtZJmzJaXut2MZA' },
  { icon: <FaPhone />, info: "+1 (012) 345-6789", path: 'tel:+10123456789' },
  { icon: <FaEnvelope />, info: "info@littlelemon.com", path: 'mailto:info@littlelemon.com' },
];