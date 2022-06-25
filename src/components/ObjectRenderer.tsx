import { ReactNode, useState } from "react";

export interface ItemRendererProps {
  name?: string;
  data: object;
}

const ObjectRenderer = (props: ItemRendererProps) => {
  const { name, data } = props;
  const [expanded, setExpanded] = useState(false);

  const openBracket = Array.isArray(data) ? "[" : "{";
  const closingBracket = Array.isArray(data) ? "]" : "}";

  const showValue = (): ReactNode => {
    return Object.entries(data).map((item, i) => {
      const key = item[0];
      const value = item[1];
      if (typeof value === "object" && value !== null) {
        return (
          <div style={{ paddingLeft: 16 }} key={i}>
            <ObjectRenderer name={key} data={value} />
          </div>
        );
      } else {
        return (
          <div style={{ paddingLeft: 16 }} key={i}>
            <span>{key}: </span>
            <span>{String(item[1])}</span>
          </div>
        );
      }
    });
  };

  return (
    <div>
      <span
        style={{ cursor: "pointer" }}
        onClick={() => setExpanded((v) => !v)}
      >
        {expanded ? "▼ " : "▶ "}
      </span>
      <span>{name ? name + ": " : null} </span>
      <span>{openBracket}</span>
      <span>{expanded ? showValue() : "..."}</span>
      <span>{closingBracket}</span>
    </div>
  );
};

export default ObjectRenderer;
