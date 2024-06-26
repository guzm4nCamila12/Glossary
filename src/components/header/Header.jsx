import React from "react";
import './Header.css';
import Body from "../body/Body";
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';

function Header() {
    return (
        <div className="header">
            <button onClick={regresar} className="botonRegresar"> <SettingsBackupRestoreIcon/> </button>
            <h1>Glossary</h1>
        </div>
    )
}

function regresar(){
    <p> <Body/> </p>
}

export default Header;