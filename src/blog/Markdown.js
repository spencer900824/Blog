import * as React from "react";
import post1 from "./blog-post.1.md";
import ReactMarkdown from "react-markdown";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { useState } from "react";

function MarkdownListItem(props) {
  return <Box component="li" sx={{ mt: 1, typography: "body1" }} {...props} />;
}
const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h4",
        component: "h1",
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: "h6", component: "h2" },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: "subtitle1" },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "caption",
        paragraph: true,
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: Link },
    li: {
      component: MarkdownListItem,
    },
  },
};

const getMd = (filePath, set) => {
  fetch(filePath)
    .then((res) => res.text())
    .then((text) => set(text));
};

const Markdown = () => {
  const [ps, setPs] = useState();
  getMd(post1, setPs);
  console.log(typeof(ps));
  return <ReactMarkdown options={options} children={ps} />;
};
export default Markdown;
