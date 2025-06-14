import { site } from "@/config/constant";
import Head from "next/head";

interface PropTypes {
    title?: string;
}

const PageHead = (props: PropTypes) => {
    const { title = "" } = props;

    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <title>{title}</title>
            <meta name="description" content={site.description} />
            <meta name="keywords" content={site.keywords.toString()} />
        </Head>
    );
};

export default PageHead;
