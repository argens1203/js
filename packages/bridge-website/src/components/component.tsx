import { EntityNode } from "node-entity";
import React, { ComponentType } from "react";
import { Article } from "./article";
import { ComponentProps } from "./component-props.type";
import { Raw } from "./raw";
import { Title } from "./title";
import { Body } from "./body";
import { DataType } from "model";
import { Image } from "./image";
import { Sketch } from "./sketch";

export function Component(props: ComponentProps) {
  const { node } = props;
  return React.createElement(componentFactory(node), {
    node,
  });
}

function componentFactory(
  node?: EntityNode
): ComponentType<{ node: EntityNode }> {
  switch (node?.preferredPresentation) {
    case "ARTICLE":
      return Article;
    case "TITLE":
      return Title;
    case "BODY":
      return Body;
    case "DEBUG":
      return Raw;
    case "IMAGE":
      return Image;
    case "LINK":
    default:
      if (node?.dataType === DataType.STRING) {
        return Sketch;
      }
      return Raw;
  }
}
