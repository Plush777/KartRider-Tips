import DefaultLayout from "components/layout/common/DefaultLayout";

export default function GuideLayout({ children }) {
    return (
        <DefaultLayout type="sub">
            {children}
        </DefaultLayout>
    )
}