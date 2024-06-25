import './Footer.css';

function Footer({ applyFilter = () => {} }) {
    const letters = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];

    const getLetterFiltersDom = () => {
        return letters.map((letter, index) => {
            return <button key={index} onClick={() => { applyFilter(letter) }}>{letter}</button>
        })
    }

    return (
        <div className="Footer">
            {getLetterFiltersDom()}
        </div>
    );
}

export default Footer;


