import DefaultLayout from "components/layout/common/DefaultLayout";
import ContributeMDX from 'markdown/contribute.mdx';

export default function Contribute(){
    return ( 
        <DefaultLayout type="sub">
            <ContributeMDX/>
        </DefaultLayout>
    );
}