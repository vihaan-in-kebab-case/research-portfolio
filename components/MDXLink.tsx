import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

interface MdxLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href?: string;
    children?: ReactNode;
}

export function MDXLink({ href = "", children, ...props }: MdxLinkProps) {
    const isExternal = /^https?:\/\//.test(href);

    if (isExternal) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
            </a>
        );
    }

    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
}