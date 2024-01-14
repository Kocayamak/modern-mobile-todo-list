import { Ionicons, Feather } from "@expo/vector-icons";

export const loginForm = [
  {
    id : 1,
    title: "E-Mail Adresi",
    icon: <Ionicons name="mail" size={20} color="#868E96" />,
  },
  {
    id : 2,
    title: "Şifre",
    icon: <Ionicons name="key-outline" size={20} color="#868E96" />,
  },
];

export const registerForm = [
    {
        id : 1,
        title : "Ad",
        icon : <Feather name="user" size={20} color="#868E96" />
    },
    {
        id : 2,
        title : "Soyad",
        icon : <Feather name="user" size={20} color="#868E96" />
    },
    {
        id : 3,
        title : "E-Mail Adresi",
        icon : <Ionicons name="mail" size={20} color="#868E96" />
    },
    {
        id : 4,
        title : "Şifre",
        icon : <Ionicons name="key-outline" size={20} color="#868E96" />
    },
    {
        id : 5,
        title : "Şifre Tekrar",
        icon : <Ionicons name="key-outline" size={20} color="#868E96" />
    }
]