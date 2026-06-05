export async function getProjects(categories = "") {
    try {
        let url = `${process.env.WORDPRESS_API_URL}/v2/projects?_embed=true`;
    
        if (categories) {
            url += `&categories=${categories}`;
        }
    
        const res = await fetch(url, {
            cache: "no-store"
        });
    
        const data = await res.json();
        return data.length > 0 ? data : [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getProject(slug) {
    try {
        const res = await fetch(`${process.env.WORDPRESS_API_URL}/v2/projects?slug=${slug}&_embed`, {
            next: { revalidate: 10 }
        });

        if (!res.ok) throw new Error("Failed to fetch projects");

        const data = await res.json();
        return data.length > 0 ? data : [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getProjectCategories() {
    try {
        const res = await fetch(
            `${process.env.WORDPRESS_API_URL}/v2/categories?hide_empty=true&per_page=100`,
            { next: { revalidate: 10 } }
        );

        if (!res.ok) {
            throw new Error("Failed to fetch categories");
        }

        const data = await res.json();
        return data.length > 0 ? data : [];
    } catch (error) {
        console.error(error);
        return [];
    }
}
