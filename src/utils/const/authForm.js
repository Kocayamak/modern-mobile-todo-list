import { Ionicons, Feather } from "@expo/vector-icons";

export const loginForm = [
  {
    id: 1,
    title: "E-Mail Adresi",
    type : "email",
    icon: <Ionicons name="mail" size={20} color="#868E96" />,
  },
  {
    id: 2,
    title: "Şifre",
    type : "password",
    icon: <Ionicons name="key-outline" size={20} color="#868E96" />,
    isSecure: true,
    secureIcon: {
      visible: <Feather name="eye" size={20} color="#868E96" />,
      invisible: <Feather name="eye-off" size={20} color="#868E96" />,
    },
  },
];

export const registerForm = [
  {
    id: 1,
    title: "Ad",
    type : "name",
    icon: <Feather name="user" size={20} color="#868E96" />,
  },
  {
    id: 2,
    title: "Soyad",
    type : "surname",
    icon: <Feather name="user" size={20} color="#868E96" />,
  },
  {
    id: 3,
    title: "E-Mail Adresi",
    type : "email",
    icon: <Ionicons name="mail" size={20} color="#868E96" />,
  },
  {
    id: 4,
    title: "Şifre",
    icon: <Ionicons name="key-outline" size={20} color="#868E96" />,
    isSecure: true,
    type : "password",
    secureIcon: {
      visible: <Feather name="eye" size={20} color="#868E96" />,
      invisible: <Feather name="eye-off" size={20} color="#868E96" />,
    },
  },
  {
    id: 5,
    title: "Şifre Tekrar",
    icon: <Ionicons name="key-outline" size={20} color="#868E96" />,
    isSecure: true,
    type : "rpassword",
    secureIcon: {
      visible: <Feather name="eye" size={20} color="#868E96" />,
      invisible: <Feather name="eye-off" size={20} color="#868E96" />,
    },
  },
];
