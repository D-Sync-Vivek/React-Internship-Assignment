
export const fetchData = async (page: number = 1) => {
    try {
        const response = await fetch(`https://api.artic.edu/api/v1/artworks?page=${page}`);
        if (!response.ok) throw new Error("Failed to fetch");
        const json = await response.json();
        return {
            data: json.data,
            totalRecords: json.pagination.total
        };
    } catch (err: any) {
        throw new Error("Error occurred: " + err.message);
    }
};