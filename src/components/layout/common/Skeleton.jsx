import * as Sk from 'style/layout/Skeleton.style';

export default function Skeleton({ type }) {

    function render () {
        if (type === 'grid') {
            return (
                <Sk.Wrap type={type}>
                    <Sk.Item>
                        <Sk.Top className="top"/>
                        <Sk.Bottom className="bottom"/>
                    </Sk.Item>
                </Sk.Wrap>
            )
        }
    }

    return (
        <>
            {render()}
        </>
    )
}