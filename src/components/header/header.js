import "./header.css"

export let Header = () => {
    return (
      <div className="header">
        <p className="header-title">Hoteles</p>
        <p className="header-date">
          desde el &nbsp;<span>________</span>hasta el &nbsp;<span>________</span>
        </p>
      </div>
    );
  };