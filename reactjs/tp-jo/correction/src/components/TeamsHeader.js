import gold from '../assets/medals/gold-medal-filled-light1.svg';
import silver from '../assets/medals/silver-medal-filled-light.svg';
import bronze from '../assets/medals/bronze-medal-filled-light.svg';
import all from '../assets/medals/medals-three-dots-light1.svg';

export const TeamsHeader = () => {
    return (
        <div className="team row border-bottom-1 border-light pb-2">
            <div className="col-7">Equipes</div>
            <div className="col-1 text-center">
                <img src={gold} alt='gold medal' />
            </div>
            <div className="col-1 text-center">
                <img src={silver} alt='silver medal' />
            </div>
            <div className="col-1 text-center">
                <img src={bronze} alt='bronze medal' />
            </div>
            <div className="col-1 text-center">
                <img src={all} alt='all medals' />
            </div>
        </div>
    )
}