import React from "react";
import PropTypes from "prop-types";
import { ScaleTextField } from "@telekom/scale-components-react";

function TextFieldM(props) {
    return (
      <ScaleTextField {...props} />
    )
  }

TextFieldM.propTypes = {
/**
 * Works
 */
type: PropTypes.oneOf(['email', 'hidden', 'number', 'password', 'tell', 'text']),

/**
 * Works
 */
disabled: PropTypes.bool,

/**
 * Works
 */
readOnly: PropTypes.bool,

/**
 * Doesn't Work
 */
required: PropTypes.bool,

/**
 * Works
 */
helperText: PropTypes.string,

/**
 * Works
 */
value: PropTypes.string,

/**
 * Works
 */
inputId: PropTypes.string,

/**
 * Doesn't Work
 */
invalid: PropTypes.bool,

/**
 * Works
 */
label: PropTypes.string,

/**
 * Works
 */
placeholder: PropTypes.string,

/**
 * Works
 */
counter: PropTypes.bool,

/**
 * Works
 */
maxLength: PropTypes.number,

/**
 * Works
 */
minLength: PropTypes.number,
}

export { TextFieldM as default }