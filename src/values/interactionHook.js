import { useInView } from 'react-intersection-observer';

export function useSectionInteraction() {
    const [section2TitleRef, section2TitleInView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
        delay: 500
    });

    const [section2BoxRef, section2BoxInView] = useInView({
        triggerOnce: true,
        rootMargin: '-200px 0px',
        delay: 650
    });

    const [section3TitleRef, section3TitleInView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
        delay: 500
    });

    return {
        section2TitleRef,
        section2TitleInView,
        section2BoxRef,
        section2BoxInView,
        section3TitleRef,
        section3TitleInView,
    }
}

export function useItemInteraction() {
    const [itemRef, itemInView] = useInView({
        triggerOnce: true
    });

    const [itemRef02, itemInView02] = useInView({
        triggerOnce: true,
        delay: 300
    });

    const [itemRef03, itemInView03] = useInView({
        triggerOnce: true,
        delay: 600
    });

    const [itemRef04, itemInView04] = useInView({
        triggerOnce: true,
        delay: 900
    });

    return {
        itemRef,
        itemInView,
        itemRef02,
        itemInView02,
        itemRef03,
        itemInView03,
        itemRef04,
        itemInView04
    }
}

export function useEndInteraction() {
    const [endRef, endInView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px'
    });

    const [endRef02, endInView02] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px'
    });

    return {
        endRef,
        endInView,
        endRef02,
        endInView02
    }
}