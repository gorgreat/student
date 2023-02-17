import React from "react";
import PropTypes from "prop-types";

const InputField = ({ label, name, value, onChange, error, onFocus, type }) => {
    const getInputCalsses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };

    return <>
        <div className="mt-3 mb-3">
            <div className="form-floating has-validation">
                <input
                    className={getInputCalsses()}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    maxLength={type === "number" ? 4 : 100}
                />
                <label htmlFor={name}>{label}</label>
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    </>;
};

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    type: PropTypes.string,
    onFocus: PropTypes.func
};

export default InputField;
