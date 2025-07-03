import { memo } from "react";

interface SchemaScriptsProps {
    schemas: object[];
}

const SchemaScripts = ({ schemas }: SchemaScriptsProps) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [...schemas],
                }),
            }}
        />
    );
};

export default memo(SchemaScripts);
