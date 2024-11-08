import * as React from "react";
import * as ReactDOM from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";
import { IFrame } from "./IFrame";


class IFrameWrapper extends reactToWebComponent(IFrame, React, ReactDOM, {
  shadow: "open",
  props: ["name", "title", "src", "height"],
}) { 

    static getMetaConfig = () => ({
        controlName: "nadiajamhari-iframe",
        version: "1.3",
        description: "Iframe component which renders content from a source URL",
        iconUrl: "one-line-text",
        groupName: "Visual",
        fallbackDisableSubmit: false,

        standardProperties: {
            readOnly: true,
            required: true,
            description: true,
          },

           //...
  properties: {
    src: {
      type: "string",
      title: "Source URL",
      description:
        "URL of the content to display. Note that some sites may not allow content to be rendered in an iframe",
    },
    height: {
      type: "string",
      title: "Height",
      description: "Height of the component",
    },
  },
      });

      

}

customElements.define("nadiajamhari-iframe", IFrameWrapper);