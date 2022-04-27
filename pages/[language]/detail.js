import React from "react";
import { i18nContext } from "../../contexts/i18n-context";

export default function Detail() {
  return (
    <i18nContext.Consumer>
      {(i18n) => (
        <div>
          <h1>{i18n.title_detail_page}</h1>
          <a href={`/${i18n.env}`}>Click To index</a>
        </div>
      )}
    </i18nContext.Consumer>
  );
}
