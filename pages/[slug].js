// pages/[slug].js

export async function getStaticPaths() {
    // Fetch dynamic paths from an external API or database
    const paths = [
        { params: { slug: 'page1' } },
        { params: { slug: 'page2' } },
        // Add more dynamic paths as needed
    ];

    return {
        paths,
        fallback: false // or true if using fallback
    };
}

export default function Page({ data }) {
    // Page component logic
}
