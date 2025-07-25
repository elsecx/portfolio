import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-bash";

export const highlightCode = (code: string, language: string = "tsx") => {
    return Prism.highlight(code, Prism.languages[language], language);
};
