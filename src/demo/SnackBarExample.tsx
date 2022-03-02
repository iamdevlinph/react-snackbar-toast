import React, { useState } from "react";
import useSnackbar from "../components/Snackbar";

const CustomComponet = () => {
    return <div className="customComponet">custom component</div>;
};

export default function SnackBarExample() {
    const { addToast, removeToast, removeAllToast } = useSnackbar();
    const [snackbarId, setsnackBarId] = useState("");

    const open = option => {
        addToast("Toast Message", option);
    };
    const openWithId = option => {
        let snackId = addToast("Click on remove toast button to close", option);
        setsnackBarId(snackId);
    };

    const remove = () => {
        if (snackbarId) {
            removeToast(snackbarId);
            setsnackBarId("");
        }
    };

    const retry = () => {
        //do something
        //you can retry the api call if failed
    };

    return (
        <div className="examples">
            {/* simple */}
            <div className="ex-section">
                <h3 className="sub-heading">Simple</h3>
                <button onClick={open}>open Snackbar</button>
            </div>

            {/* without auto dismiss */}
            <div className="ex-section">
                <h3 className="sub-heading">Without auto dismiss</h3>
                <button
                    disabled={snackbarId}
                    onClick={() => openWithId({ autoDismiss: false })}
                >
                    open Snackbar
        </button>
                <br />
                <br />
                <button onClick={remove}>Remove toast</button>
                <br />
                <button onClick={removeAllToast}>remove all active snackbar</button>
            </div>

            {/* Type: success*/}
            <div className="ex-section">
                <h3 className="sub-heading">Type success</h3>
                <button onClick={() => open({ type: "success" })}>open Snackbar</button>
            </div>

            {/* Type: error*/}
            <div className="ex-section">
                <h3 className="sub-heading">Type error</h3>
                <button onClick={() => open({ type: "error" })}>open Snackbar</button>
            </div>

            {/* with custom icon*/}
            <div className="ex-section">
                <h3 className="sub-heading">With custom icon</h3>
                <button
                    onClick={() =>
                        open({
                            icon:
                                "https://w0.pngwave.com/png/265/1017/crash-team-racing-information-computer-icons-info-icon-png-clip-art.png"
                        })
                    }
                >
                    open Snackbar
        </button>
            </div>

            {/* with close button*/}
            <div className="ex-section">
                <h3 className="sub-heading">With close button</h3>
                <button
                    onClick={() =>
                        open({
                            closeButton: true,
                            autoDismissTime: 10000
                        })
                    }
                >
                    open Snackbar
        </button>
            </div>

            {/* with custom close icon*/}
            <div className="ex-section">
                <h3 className="sub-heading">With custom closeIcon</h3>
                <button
                    onClick={() =>
                        open({
                            closeButton: true,
                            autoDismissTime: 10000,
                            closeIcon:
                                "https://www.tradeoakbuildingkits.com/wp-content/plugins/portfolio-filter-gallery-premium/img/x-close-icon-white.png"
                        })
                    }
                >
                    open Snackbar
        </button>
            </div>

            {/* with autoDismissTime*/}
            <div className="ex-section">
                <h3 className="sub-heading">With autoDismissTime 10s</h3>
                <button onClick={() => open({ autoDismissTime: 10000 })}>
                    open Snackbar
        </button>
            </div>

            {/* with retry button*/}
            <div className="ex-section">
                <h3 className="sub-heading">With retry button</h3>
                <button onClick={() => open({ autoDismiss: false, retry: retry })}>
                    open Snackbar
        </button>
            </div>

            {/* Pass Custom component*/}
            <div className="ex-section">
                <h3 className="sub-heading">With custom component</h3>
                <button onClick={() => addToast(<CustomComponet />)}>
                    open Snackbar
        </button>
            </div>

            {/*Overiding the css*/}
            <div className="ex-section">
                <h3 className="sub-heading">Overiding the css</h3>
                <button onClick={() => open({ className: "customToast" })}>
                    open Snackbar
        </button>
            </div>
        </div>
    );
}
