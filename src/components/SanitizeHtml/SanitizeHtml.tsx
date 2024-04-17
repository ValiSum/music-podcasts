import { ReactElement } from "react";
import DOMPurify from "dompurify";

interface Props {
  html: string;
}

export default function SanitizeHtml({ html }: Props): ReactElement {
  const cleanText = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });

  return (
    <div
      className="whitespace-pre-wrap break-words text-justify italic"
      dangerouslySetInnerHTML={{ __html: cleanText }}
    />
  );
}
