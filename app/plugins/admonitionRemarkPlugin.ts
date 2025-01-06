// Register `hName`, `hProperties` types, used when turning markdown to HTML:
/// <reference types="mdast-util-to-hast" />
// Register directive nodes in mdast:
/// <reference types="mdast-util-directive" />

// import { h } from "hastscript";
import { visit } from "unist-util-visit";

// This plugin is an example to turn `::note` into divs, passing arbitrary
// attributes.
export const admonitionRemarkPlugin = () => {
  /**
   * @param {import('mdast').Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  const admonitions = [
    "attention",
    "caution",
    "danger",
    "error",
    "hint",
    "important",
    "note",
    "tip",
    "seealso",
    "warning",
  ];
  return (tree: import("mdast").Root) => {
    visit(tree, (node) => {
      if (
        node.type === "containerDirective" ||
        node.type === "leafDirective" ||
        node.type === "textDirective"
      ) {
        if (!admonitions.includes(node.name)) return;

        const data = node.data || (node.data = {});
        const tagName = node.type === "textDirective" ? "span" : "div";

        data.hName = tagName;
        data.hProperties = { class: `admonition ${node.name}` };
        console.log("Node processed:", node);
      }
    });
  };
};
