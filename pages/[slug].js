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

export async function getStaticProps({ params }) {
    // Fetch data for the specific slug
    const { slug } = params;

    // Example: Fetch data from an external API based on the slug
    const response = await fetch(`https://api.example.com/pages/${slug}`);
    const data = await response.json();

    // Return the data as props
    return {
        props: {
            data,
        },
    };
}

export default function Page({ data }) {
    // Render the page component using the fetched data
    return (
        <div>
            {/* Display the data */}
            <h1>{data.title}</h1>
            <p>{data.content}</p>
        </div>
    );
}
