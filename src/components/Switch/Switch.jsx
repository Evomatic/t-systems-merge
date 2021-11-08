import React from "react";
import PropTypes from "prop-types";
import { ScaleSwitch } from "@telekom/scale-components-react";

function SwitchM(props) {
    return (
      <ScaleSwitch {...props} />
    )
  }

SwitchM.propTypes = {
/**
 * Works
 */
checked: PropTypes.bool,

/**
 * Works
 */
disabled: PropTypes.bool,

/**
 * Works
 */
inputId: PropTypes.string,

/**
 * Works
 */
name: PropTypes.string,

/**
 * Works
 */
label: PropTypes.string
}

export { SwitchM as default }