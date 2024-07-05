export function filterDataByGrade (grade, data) {
    if (!data) return [];

    return data && data.map((dataItem, dataIndex) => {
        const a = dataItem.name?.map((name, nameIndex) => ({
            name,
            type: data[dataIndex].type?.[nameIndex],
            img: data[dataIndex].imgs?.[nameIndex],
            stat: data[dataIndex].stats?.[nameIndex]
        }))
        .filter((item) => item.name?.includes(`[${grade}]`) ? item.name : false);

        /* 카트 이름에서 대괄호 미리 제거 */
        return a?.map((item) => {
            return {
                ...item,
                name: item.name.replace(`[${grade}]`, "").trim()
            }
        });
    }).filter(group => group?.length > 0)
}

export const filterData = (dataObject, query) => {
    if (!query) return [];

    const { data, type: dataType, optionalData } = dataObject;

    const lowerCaseQuery = query.toLowerCase();

    if (dataType == undefined || dataType !== 'list') {
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
    }

    if (dataType === 'list') {
        const karts = filterDataByGrade(optionalData, data);
        
        return karts?.map((kart) => {
            return kart?.filter((kartItem) => (kartItem.name.toLowerCase().includes(lowerCaseQuery) ? kartItem.name : false));
        }).filter((group) => group?.length > 0);
    }
};