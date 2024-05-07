import DefaultLayout from "components/layout/DefaultLayout";
import PurposeMDX from 'markdown/purpose.mdx';

export default function Purpose(){
    return ( 
        <DefaultLayout type="sub">
            <PurposeMDX />
        </DefaultLayout>
    );
}