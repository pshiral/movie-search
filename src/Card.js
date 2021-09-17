import './App.css';

function Card({ selected }) {
    return (
        <section className="card">
            <img alt={selected.Title} src={selected.Poster} />
            <div className="title">
                <span>Title: {selected.Title}</span>
                <span>Year: {selected.Year}</span>
            </div>
        </section>
    );
}

export default Card;
