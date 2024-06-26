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

{/*class Footer extends React.Component {
    render() {
      return (
        <footer className="container-fluid bg-dark text-light py-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>Tecno Vocabulary</h1>
            </div>
            <div className="col-md-6">
              <nav className="navbar navbar-expand-md navbar-dark justify-content-end nav">
                <div className="navbar-nav">
                  <a className="nav-link all" href="#" onClick={() => this.props.onFilterChange('ALL')}>ALL</a>
                  {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
                    <a key={letter} className="nav-link letters" href="#" onClick={() => this.props.onFilterChange(letter)}>{letter}</a>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </footer>
      );
    }
  }*/}

export default Footer;


