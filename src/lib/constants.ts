export const SITE_URL = "https://biznis-putovanje.vercel.app";
export const SITE_NAME = "Biznis Putovanje";
export const SITE_AUTHOR = "Milica Pavić";
export const SITE_DESCRIPTION =
  "Tvoje biznis putovanje počinje ovde. Milica Pavić, programi i podrška za žene preduzetnice koje grade biznis po svojoj meri.";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV_ITEMS: NavItem[] = [
  { label: "O meni", href: "#o-meni" },
  {
    label: "Programi",
    href: "#programi",
    children: [{ label: "MOMENTUM", href: "/momentum" }],
  },
  { label: "Besplatno", href: "#besplatno" },
];

export const NAV_CTA = {
  label: "Rezerviši mesto",
  href: "#cena",
};

export const BOOKING_URL = "https://instagram.com/PLACEHOLDER_MILICA_HANDLE";
