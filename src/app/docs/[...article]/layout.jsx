import DefaultLayout from "components/layout/common/DefaultLayout";

export default function Layout({ children }) {
    return (
        <DefaultLayout type="sub">
            {children}
        </DefaultLayout>
    )
}