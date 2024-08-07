export const Team = ({team, rank}) => {

    const flag_path = `images/flags/${team.flag}_48x48.png`;
    const [gold, silver, bronze] = team.medals;
    const total = team.medals.reduce((acc, n) => acc += n);

    return (
        <div className="team row p-2">
            <div className="col-1 text-center">{rank}</div>
            <div className="col-6">
                <img className="me-2" src={flag_path} alt={team.name} />{ team.name }
            </div>
            <div className="col-1 text-center">{gold}</div>
            <div className="col-1 text-center">{silver}</div>
            <div className="col-1 text-center">{bronze}</div>
            <div className="col-1 text-center">{total}</div>
        </div>
    )
}