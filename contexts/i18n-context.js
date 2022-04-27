import { createContext } from "react";

export const i18n = {
  en: {
    env: "en",
    title: "Hello World!",
    title_detail_page: "Hello world detail page",
  },
  th: {
    env: "th",
    title: "สวัสดีชาวโลก",
    title_detail_page: "สวัสดีชาวโลกนี้ดีเทลเพจ",
  },
};

export const i18nContext = createContext(i18n.th);
