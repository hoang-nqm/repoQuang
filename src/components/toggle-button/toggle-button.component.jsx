import React from "react";
import "./toggle-button.style.scss";
function ToggleButton({ label, setDark }) {

    return (
        <div className="container">
            <div className="toggle-switch">
                <input type="checkbox" className="checkbox"
                    name={label} id={label} onChange={(event) => {
                        setDark(!event.target.checked)
                    }} />
                <label className="label" htmlFor={label}>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
        </div>
    )
}

export default ToggleButton