import DefaultLayout from "components/layout/common/DefaultLayout";
import PurposeMDX from 'markdown/purpose.mdx';

export default function Purpose(){
    return ( 
        <DefaultLayout type="sub">
            <PurposeMDX />
        </DefaultLayout>
    );
}