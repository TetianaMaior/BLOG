import { Link } from 'react-router';
import './Header.css';

export default function Header({ setActivePage }) {

    return (
        <nav className='header_nav'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>

                </li>

            </ul>
            <ul>
                <li>
                    <Link to='/blog1'>Невицький замок</Link>

                </li>

            </ul>
            <ul>
                <li>
                    <Link to='/blog2'>Cинє озеро</Link>

                </li>

            </ul>
            <ul>
                <li>
                    <Link to='/blog3'>Озеро Сасик</Link>

                </li>

            </ul>
            <ul>
                <li>
                    <Link to='/blog4'>Що подивитись у Ворохті</Link>

                </li>

            </ul>
            <ul>
                <li>
                    <Link to='/blog5'>Піп-Іван Чорногірський</Link>

                </li>

            </ul>
        </nav>
    )
}