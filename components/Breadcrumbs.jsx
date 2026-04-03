import Link from "next/link";

export default function Breadcrumbs({ data }) {
    return (
        <ul
            className="py-5 flex items-center gap-2 overflow-auto text-sm"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
        >
            <li
                className="flex items-center gap-2 group"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
            >
                <Link href="/" itemProp="item">
                    <span itemProp="name">صفحه خانه</span>
                </Link>
                <meta itemProp="position" content="1" />
                <svg className="size-4 rotate-90 transition-transform duration-500 group-hover:-rotate-90"><use href="#svg-chevron-down" /></svg>
            </li>

            {data.map((item, index) => {
                const isLast = index === data.length - 1;
                const position = index + 2;

                return (
                    <li
                        key={index}
                        className="flex items-center gap-2 group"
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/ListItem"
                    >
                        {isLast ? (
                            <span className="text-secondary" itemProp="name">{item.title}</span>
                        ) : (
                            <Link href={item.link} itemProp="item">
                                <span itemProp="name">{item.title}</span>
                            </Link>
                        )}

                        <meta itemProp="position" content={position} />

                        {!isLast && <svg className="size-4 rotate-90 transition-transform duration-500 group-hover:-rotate-90"><use href="#svg-chevron-down" /></svg>}
                    </li>
                );
            })}
        </ul>
    );
}
