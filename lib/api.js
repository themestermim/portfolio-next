export async function getProjects() {
    const res = await fetch(`${process.env.WORDPRESS_API_URL}/v2/projects?_embed`, {
        next: { revalidate: 60 }
    });

    if (!res.ok) throw new Error("Failed to fetch projects");
    
    return res.json();
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
