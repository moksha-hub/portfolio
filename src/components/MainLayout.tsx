import { NavLink, Outlet } from 'react-router-dom'
import { profile } from '../data/portfolio'

const homeLinks = [
  { label: 'Projects', href: '/portfolio/#projects' },
  { label: 'Experience', href: '/portfolio/#experience' },
  { label: 'Contact', href: '/portfolio/#contact' },
]

export function MainLayout() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />
      <header className="topbar glass-panel">
        <NavLink to="/" className="brand-lockup" aria-label="Go to homepage">
          <span className="brand-mark">MK</span>
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </NavLink>
        <nav className="topnav" aria-label="Primary">
          {homeLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
          <NavLink to="/skills" className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
            Skills
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
