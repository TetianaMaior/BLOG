import { Outlet } from 'react-router';
import Header from '../Header';


export default function DefaultLeyout() {
    return (
        <>
            <Header />
            <div className='leyout_conteiner'>
                <Outlet />
            </div>
        </>
    )
}