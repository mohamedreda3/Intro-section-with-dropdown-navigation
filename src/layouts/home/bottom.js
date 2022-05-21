import react from "react";
import '../../assests/styles/style.css';
import maker from '../../assests/images/client-maker.svg';
import databiz from '../../assests/images/client-databiz.svg';
import audiophile from '../../assests/images/client-audiophile.svg';
import meet from '../../assests/images/client-meet.svg';
import Image from "../../components/image";
export default function () {
    return (
        <div className="drands">
            <Image source={maker} />
            <Image source={databiz} />
            <Image source={audiophile} />
            <Image source={meet} />
        </div>
    )
}