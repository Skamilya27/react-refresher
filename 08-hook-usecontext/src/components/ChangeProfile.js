import { useState } from "react";

export const ChangeProfile = (props) => {
    const [newUsername, setNewUsername] = useState("");

    return <div>
        <input onChange={(e) => setNewUsername(e.target.value)} />
        <button onClick={() => {props.setUsername(newUsername)}}> Change Username </button>
    </div>
};