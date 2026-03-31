import { NavLink, Outlet } from 'react-router-dom';

export default function BuildPage() {
    return (
        <section>
            <nav style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '16px' }}>
                <NavLink to='/build/web' className='nav-link'>Build a Web App</NavLink>
                <NavLink to='/build/mobile' className='nav-link'>Build a Mobile App</NavLink>
            </nav>
            <p>Select an option to get started.</p>
            <Outlet />
        </section>
    );
}