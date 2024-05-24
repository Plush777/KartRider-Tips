export const filterData = (data, query) => {
    if (!query) return [];

    const lowerCaseQuery = query.toLowerCase();

    const filterItems = (items) =>
        items.filter((item) =>
            item.title.toLowerCase().includes(lowerCaseQuery) ||
            (item.depth2 && filterItems(item.depth2).length > 0)
        );

        return data.map((section) => {
            const filteredDepth1 = filterItems(section.depth1);
            return {
                ...section,
                depth1: section.sectionTitle.toLowerCase().includes(lowerCaseQuery) ? section.depth1 : filteredDepth1
            };
        }).filter((section) =>
            section.sectionTitle.toLowerCase().includes(lowerCaseQuery) ||
            section.depth1.length > 0
        );
};