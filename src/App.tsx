import speedrun from './data/speedrun.json'
import links from './data/links.json'
import cursorImg from './assets/cursor-finger.png'

const AVATAR_URL = '/avatar.webp'

export default function App() {
  return (
    <>
    <div className="layout">

      {/* ── Left window: profile ── */}
      <main className="ff-window">

        <div className="title-bar">
          <h1>QuestMoreLand</h1>
        </div>

        <div className="portrait-section">
          <div className="avatar-wrap">
            <img
              className="avatar"
              src={AVATAR_URL}
              alt="QuestMoreLand avatar"
              width={120}
              height={120}
            />
          </div>
          <p className="bio">
            Hiya! I'm Quest — variety streamer working through my backlog.
            Mostly retro games &amp; RPGs, but really whatever I feel like!
          </p>
        </div>

        <div className="stats-section">
          <div className="stat-row">
            <span className="stat-label">NOW RUNNING</span>
            <span className="stat-value">{speedrun.game}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">CATEGORY</span>
            <span className="stat-value">{speedrun.category}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">PB</span>
            <a
              className="stat-value stat-link"
              href={speedrun.pbLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {speedrun.pb}
            </a>
          </div>
        </div>

      </main>

      {/* ── Right window: links ── */}
      <aside className="ff-window ff-window--links">

        <div className="title-bar">
          <h2>Find Me On</h2>
        </div>

        <nav>
          <ul className="menu-list">
            {links.map(({ platform, label, handle, href, icon }) => (
              <li key={platform}>
                <a
                  className={`menu-item menu-item--${platform}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="menu-cursor" src={cursorImg} alt="" aria-hidden="true" />
                  <img className="menu-icon" src={icon} alt="" aria-hidden="true" />
                  <span className="menu-item-label">
                    <span>{label}</span>
                    <span className="menu-item-handle">{handle}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </aside>

    </div>
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} QuestMoreLand</p>
      <p>Profile image courtesy of <a href="https://www.othatsraspberry.com/" target="_blank" rel="noopener noreferrer" className="footer-link">othatsraspberry</a></p>
    </footer>
    </>
  )
}
