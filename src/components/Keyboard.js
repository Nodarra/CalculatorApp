import React from 'react';

const Keyboard = ({updateState, setFunction, setVariable, editVariable}) => {
        return(
            <div className="keyboard">
                <button onClick={() => updateState("7")} className="key">
                    7
                </button>
                <button onClick={() => updateState("8")} className="key">
                    8
                </button>
                <button onClick={() => updateState("9")} className="key">
                    9
                </button>
                <button onClick={() => setFunction("/")} className="key divide">
                    /
                </button>


                <button onClick={() => updateState("6")} className="key">
                    6
                </button>
                <button onClick={() => updateState("5")} className="key">
                    5
                </button>
                <button onClick={() => updateState("4")} className="key">
                    4
                </button>
                <button onClick={() => setFunction("*")} className="key multiply">
                    *
                </button>


                <button onClick={() => updateState("3")} className="key">
                    3
                </button>
                <button onClick={() => updateState("2")} className="key">
                    2
                </button>
                <button onClick={() => updateState("1")} className="key">
                    1
                </button>
                <button onClick={() => setFunction("-")} className="key subtract">
                    -
                </button>


                <button onClick={() => updateState("0")} className="key">
                    0
                </button>
                <button className="key" onClick={() => editVariable() } >
                    C
                </button>
                <button onClick={() => setVariable()} className="key equal">
                    =
                </button>
                <button onClick={() => setFunction("+")} className="key add">
                    +
                </button>
            </div>
        )
    }


export default Keyboard;