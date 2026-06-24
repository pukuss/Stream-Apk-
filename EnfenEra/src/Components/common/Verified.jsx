import React from "react";

function VerifiedBadge({
    size = 18,
    className = "text-blue-500",
    title = "Verified",
}) {
    return (
        <svg
            aria-label={title}
            className={className}
            fill="currentColor"
            height={size}
            width={size}
            role="img"
            viewBox="0 0 40 40"
        >
            <title>{title}</title>

            <path
                fillRule="evenodd"
                d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v6.905h6.233l2.973 5.15 5.36-3.094 5.359 3.094 2.972-5.15h6.234v-6.354L40 25.359 36.905 20 40 14.641l-5.437-3.138V5.15h-6.234L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
            />
        </svg>
    );
}

export default VerifiedBadge;