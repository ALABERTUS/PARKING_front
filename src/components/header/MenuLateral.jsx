import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

function MenuLateral({ user }) {
    const { role } = user;


    let menuItems = [];
    if (role === 'Solicitante') {
        menuItems = [
            { label: 'Solicitar Reserva', path: '/solicitar-reserva' },
            { label: 'Mis Solicitudes', path: '/mis-solicitudes' },
            { label: 'Mapa', path: '/mapa' },
        ];
    } else if (role === 'Administrador') {
        menuItems = [
            { label: 'Solicitar Reserva', path: '/solicitar-reserva' },
            { label: 'Mis Solicitudes', path: '/mis-solicitudes' },
            { label: 'Solicitudes', path: '/solicitudes' },
            { label: 'Usuarios', path: '/usuarios' },
            { label: 'Editar Plazas', path: '/editar-plazas' },
            { label: 'Mapa', path: '/mapa' },
        ];
    } else if (role === 'Propietario') {
        menuItems = [
            { label: 'Mi Plaza', path: '/mi-plaza' },
            { label: 'Mapa', path: '/mapa' },
        ];
    }

    return (
        <Menu>
            {menuItems.map((item, index) => (
                <Link to={item.path} key={index}>
                    {item.label}
                </Link>
            ))}
        </Menu>
    );
}

export default MenuLateral
