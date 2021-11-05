import React from "react";
import PropTypes from "prop-types";
import { Button } from "@telekom/scale-components-react";

function ButtonM(props) {
  return (
    <Button {...props}>{props.children}</Button>
  );
}

ButtonM.propTypes = {
/**
 * label of the button.
 * @uxpinpropname Label
 */
 children: PropTypes.string,

/**
 * (optional) If true, the button is disabled.
 */
 disabled: PropTypes.bool,

/**
 * (optional) Set to true when the button contains only an icon.
 */
 iconOnly: PropTypes.bool,

/**
 * (optional) Icon position related to the label.
 */
 iconPosition: PropTypes.oneOf(["after", "before"]),

/**
 * (optional) The size of the button.
 */
 size: PropTypes.oneOf(["large", "small"]),

/**
 * (optional) Button type.
 */
 type:PropTypes.oneOf(["button", "reset", "submit"]),
};

export { ButtonM as default };
