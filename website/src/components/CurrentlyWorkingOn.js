import React from 'react';

const CurrentlyWorkingOn = () => {
  const sectionStyle = {
    margin: '2rem 0',
    padding: '2rem',
    borderRadius: '12px',
    backgroundColor: '#1b1b1b',
  };

  const titleStyle = {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#f4f4f4',
  };

  const cardListStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  };

  const cardStyle = {
    backgroundColor: '#222',
    padding: '1rem 1.5rem',
    borderRadius: '10px',
    border: '1px solid #333',
  };

  const iconStyle = {
    color: '#a855f7',
    minWidth: '1.25rem',
  };

  const linkStyle = {
    color: '#a855f7',
    fontWeight: 600,
    textDecoration: 'none',
  };

  const roleStyle = {
    margin: 0,
    fontWeight: 'bold',
    fontSize: '1.1rem',
    color: '#f4f4f4',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const descStyle = {
    marginTop: '0.5rem',
    color: '#ccc',
    lineHeight: 1.6,
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>
        <i className="fas fa-tools" style={iconStyle}></i>
        Current Work
      </h2>
      <div style={cardListStyle}>
      <div style={cardStyle}>
          <h3 style={roleStyle}>
            <i className="fas fa-flask" style={iconStyle}></i>
            Head Developer @ <a href="https://discord.gg/free2rp" target="_blank" rel="noreferrer" style={linkStyle}>Free2RP</a>
          </h3>
          <p style={descStyle}>
            Building immersive FiveM systems & scripts in a serious RP environment.
          </p>
        </div>

        <div style={cardStyle}>
          <h3 style={roleStyle}>
            <i className="fas fa-shield-alt" style={iconStyle}></i>
            Moderator @ <a href="https://discord.gg/schedule-one" target="_blank" rel="noreferrer" style={linkStyle}>Schedule I</a>
          </h3>
          <p style={descStyle}>
            Helping manage the Schedule I community — a chaotic drug empire sim.
          </p>
        </div>

        <div style={cardStyle}>
          <h3 style={roleStyle}>
            <i className="fas fa-ticket-alt" style={iconStyle}></i>
            Owner & Dev @ <a href="https://ticketgenie.pro" target="_blank" rel="noreferrer" style={linkStyle}>Ticket Genie</a>
          </h3>
          <p style={descStyle}>
            Creating a powerful ticket bot platform for Discord with OAuth dashboards and role-based tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyWorkingOn;
