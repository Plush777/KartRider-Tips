import * as L from "style/components/loading/LoadingSpinner.style";

export default function LoadingSpinner() {
    return (
        <L.Wrap className="loadingSpinnerWrap">
            <L.Ring>
                <L.Item></L.Item>
                <L.Item></L.Item>
                <L.Item></L.Item>
                <L.Item></L.Item>
            </L.Ring>
        </L.Wrap>
    )
}