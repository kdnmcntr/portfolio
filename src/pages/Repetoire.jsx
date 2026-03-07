import pieces from '../data/repetoire.json'
import styles from '../styles/Repetoire.module.css'

const Repetoire = () => {

    let composers = [];
    for (let piece of pieces) {
        if (!composers.includes(piece.composer)) {
            composers.push(piece.composer);
        }
    }
    composers.sort();

    let repetoireList = []
    for (let composer of composers) {
        let comp_pieces = pieces.filter(piece =>
            piece.composer === composer
        );
        let listPieces = comp_pieces.map(comp_piece =>
            <li>
                <h5>{comp_piece.title} <i>{comp_piece.subtitle}</i> in {comp_piece.key}, {comp_piece.opus}</h5>
                {comp_piece.movement && <p>({comp_piece.movement})</p>}
            </li>
        );
        let element = <div>
            <h2>{composer}</h2>
            <ul>{listPieces}</ul>
        </div>
        repetoireList.push(element);
    }

    return(<>
    <div className="pt-4">
        <h1 className="h1">Kaden's Repetoire</h1>
    </div>
    <div className="ps-5 py-3">{repetoireList}</div>
    </>);
}

export default Repetoire;