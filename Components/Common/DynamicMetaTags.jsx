import { useEffect, useState } from "react";
import Head from "next/head";

export const DynamicMetaTags = ({ metaString }) => {
    const [metaTags, setMetaTags] = useState([]);

    useEffect(() => {
        // Parse meta string into individual meta tag objects
        const parseMetaString = (metaString) => {
            const parser = new DOMParser();
            const parsedHTML = parser.parseFromString(metaString, "text/html");
            const metaElements = Array.from(parsedHTML.head.children);

            return metaElements.map((tag) => {
                if (tag.tagName === "TITLE") {
                    return { type: "title", content: tag.textContent };
                } else if (tag.tagName === "META") {
                    return {
                        type: "meta",
                        attributes: Array.from(tag.attributes).reduce((acc, attr) => {
                            acc[attr.name] = attr.value;
                            return acc;
                        }, {}),
                    };
                } else if (tag.tagName === "SCRIPT" && tag.type === "application/ld+json") {
                    return { type: "script", content: tag.textContent };
                }
                return null;
            }).filter(Boolean);
        };

        const parsedMetaTags = parseMetaString(metaString);
        setMetaTags(parsedMetaTags);
    }, [metaString]);

    return (
        <Head>
            {metaTags.map((tag, index) => {
                if (tag.type === "title") {
                    return <title key={index}>{tag.content}</title>;
                } else if (tag.type === "meta") {
                    return <meta key={index} {...tag.attributes} />;
                } else if (tag.type === "script") {
                    return <script key={index} type="application/ld+json">{tag.content}</script>;
                }
                return null;
            })}
        </Head>
    );
};