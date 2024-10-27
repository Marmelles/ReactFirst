import './style.css'

export default function Header() {
    return (
        <header className="d-flex justify-content-between p-2 mx-3">
            <div className='d-flex '>
                <img className='logo mx-2' src="/img/marmel-head.png" alt="logo" />
                <h4>Marmell</h4>
            </div>

            <div className='d-flex justify-content-around w-25 '>
                <a href="#">First</a>
                <a href="#">Second</a>
                <a href="#">Thirty</a>
                <a href="#">Fourty</a>
                <a href="#">Fivety</a>
            </div>

            <div className='d-flex justify-content-between'>
                <div >
                    <h6>Иконка</h6>
                </div>
                <div className='mx-2'>
                    <p>Вход</p>
                </div>
            </div>
        </header>
    )
}
