import React from "react";
import { i18nContext } from "../../contexts/i18n-context";

export default function Main() {
  return (
    <i18nContext.Consumer>
      {(i18n) => (
        <div>
          <h1>{i18n.title}</h1>
          <a href={`/${i18n.env}/detail`}>Click To Detail page</a>
        </div>
      )}
    </i18nContext.Consumer>
  );
}
